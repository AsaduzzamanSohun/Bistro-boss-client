import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import {loadStripe} from '@stripe/stripe-js';
import Checkout from "./Checkout";


const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

    return (
        <div>
            <SectionTitle
                heading='Payment'
                subHeading="Please pay to eat">
            </SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <Checkout></Checkout>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
