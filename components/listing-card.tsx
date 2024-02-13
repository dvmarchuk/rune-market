import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
// import {Bid} from "@/components/columns-listing";
import {Button} from "@/components/ui/button";


interface CardComponentProps {
    data: Bid[]; // Replace 'any' with the actual type of your data
}

export type Bid = {
    _id: string
    type: string
    tick: string
    amount: number | null
    price: number | null
    owner: string
}

export default function CardComponent({data}: CardComponentProps) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'center' }}>
            {data.map((item, index) => (
                <Card key={index} style={{ flex: '0 0 30%', margin: '1%' }}>
                    <CardHeader>
                        <CardTitle>{item.type}</CardTitle>
                        <CardDescription>{item.tick}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>{item.price}</p>
                        <p>{item.amount}</p>
                        <p>3w45yh...r3se</p>
                    </CardContent>
                    <CardFooter>
                        {item.type === 'ask' && <Button>Buy</Button>}
                        {item.type === 'bid' && <Button>Sell</Button>}
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}