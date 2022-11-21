import { useParams } from '@remix-run/react';

export default function DynamicChild() {
   const { someId } = useParams();

   return <div>I am dynamic {someId}</div>;
}
