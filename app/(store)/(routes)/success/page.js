import SuccessMessage from '@/components/SuccessMessage';
import { Button } from '@/components/ui/button';
import { stripe } from '@/lib/utils';
import { PartyPopper } from 'lucide-react';
import Link from 'next/link';


const SuccessPage = async ({ searchParams }) => {
  
  const { session_id } = searchParams


  const session = await stripe.checkout.sessions.retrieve(session_id);
  
  const customerEmail = session.customer_details.email
  const customerName = session.customer_details.name
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <SuccessMessage customerEmail={customerEmail} customerName={ customerName} />
    </div>
  );
}

export default SuccessPage