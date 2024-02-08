import {DataTable} from "@/components/listing-table";
import {columns} from "@/components/columns-listing";
import {Toaster} from "@/components/ui/toaster";
import BuySell from "@/components/buy-sell";

export default function btc2() {
    return (
        <>
            <main className="h-screen bg-slate-950" >{/*style={styles.backgroundImage}*/}
                <div className="font-mono">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh'
                    }}>
                        <div className="container mx-auto py-10">

                            <BuySell/>
                            {/*call the api*/}
                            {/*<DataTable columns={columns} data={data}/>*/}
                        </div>
                    </div>
                </div>
            </main>
            <Toaster/></>
    );
}