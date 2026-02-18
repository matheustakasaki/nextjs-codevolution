import { Counter } from './counter';

 export const metadata = {
    title: 'Counter Page',
    description: 'A simple counter page using client-side rendering',
};

export default function CounterPage() {
    
    return (
        <Counter />
    );
}