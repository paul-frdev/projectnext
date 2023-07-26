'use client'
'use client';
import React, { useState } from 'react';

import { Button } from '../ui/button';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { toast } from 'react-hot-toast';
import { useParams, useRouter } from 'next/navigation';
import { Email } from '@/types';
import { Checkbox } from '../ui/checkbox';
import { Typography } from '../ui/typography';
import { Lock } from '@/icons/lock';
import { Title } from '../ui/title';
import { cn } from '@/lib/utils';
import { ReceiveEmailModal } from '../modals/receiveEmailModal';
import useReceiveEmailModal from '@/hooks/useReceiveEmailModal';


type ReceiveEmailFormValues = z.infer<typeof formSchema>;

interface ReceiveEmailFormProps {
  initialData?: Email | null;
}

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  checkbox: z.boolean().default(false).optional(),
});

export const ReceiveEmailForm: React.FC<ReceiveEmailFormProps> = ({ initialData }) => {

  const params = useParams();
  const router = useRouter();

  const viewModal = useReceiveEmailModal()

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<ReceiveEmailFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      email: '',
      checkbox: false
    },
  });

  const onSubmit = async (data: ReceiveEmailFormValues) => {
    console.log(data);
    if (data) {
      viewModal.onOpen()
    }
  };
  return (
    <>
      <ReceiveEmailModal />
      <Title className='w-full max-w-[384px] text-center'>Enter your email to see the quiz results</Title>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full max-w-[384px] max-h-[426px]'
        >
          <div className='mb-6 relative'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <label className={cn(`text-[16px] font-sansBold leading-[24px] tracking-[0.1px] mb-[4px]`, form.formState.errors.email ? 'text-error' : '')}>Email</label>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={form.formState.errors.email && 'border-errorInput'}
                      disabled={loading}
                      placeholder='example@gmail.com'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='absolute -bottom-[21px] left-[18px] font-sansRegular text-sm text-error' />
                </FormItem>
              )}
            />
          </div>
          <div className='mb-6'>
            <FormField
              control={form.control}
              name='checkbox'
              render={({ field }) => (
                <FormItem className=' border-none flex flex-row justify-start items-start gap-x-3 rounded-md border'>
                  <FormControl>
                    <Checkbox
                      className='border-2 border-orange h-[24px] w-[24px] rounded-lg mt-2'
                      checked={field.value}
                      //@ts-ignore
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className='space-y-0 text-sm font-sansRegular tracking-[0.4px] cursor-pointer'>
                    I would like to receive tips, offers, know-how,
                    and more from Prosperi via emails
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <div className='flex justify-start items-start gap-x-3 mb-9'>
            <div>
              <Lock />
            </div>
            <Typography className='tex-sm font-sansRegular tracking-[0.4px] text-left'>
              We respect your privacy and are committed
              to protecting your personal data
            </Typography>
          </div>
          <div className='w-full flex justify-center items-center'>
            <Button disabled={loading} className='w-full max-w-[264px] h-[48px]' type='submit'>
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}
