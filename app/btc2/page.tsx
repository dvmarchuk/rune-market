import {Toaster} from "@/components/ui/toaster";
import BuySell from "@/components/buy-sell";
import MarketData from "@/components/bid-table";

export default function btc2() {
    return (
        <>
            <main className="h-screen bg-slate-950" >{/*style={styles.backgroundImage}*/}
                <div className="font-mono">
                    <div style={{
                        height: '100vh'
                    }} className="md:flex md:flex-row container">
                        {/*<div className="md:basis-1/4">01</div>*/}
                        <div className="md:basis-1/2 m-4">
                            {/*    make the buy sell bid thing here*/}
                            {/*    make a reusable row*/}
                            {/*    ngfor that crap for all the listing*/}
                            {/*    pagination or scroll will be required.*/}

                            {/*    buy part thats green*/}
                            {/*    sell part thats red*/}
                            {/*    previous sales*/}
                            <MarketData/>
                        </div>
                        <div className="md:basis-1/4 m-4">
                            <BuySell/>
                        </div>

                        {/*<Button className="bg-green-950">Buy</Button>*/}
                        {/*<Button className="bg-red-950">Sell</Button>*/}
                        {/*call the api*/}
                        {/*<DataTable columns={columns} data={data}/>*/}
                    </div>
                </div>
            </main>
            <Toaster/>
        </>
    )
    ;
}