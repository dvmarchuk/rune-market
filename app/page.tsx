import {Toaster} from "@/components/ui/toaster";
import {columns, Payment} from "@/components/columns-listing";
import {DataTable} from "@/components/listing-table";
async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            // icon: "100",
            ticker: "BTC2",
            price: 23408,
        },
        {
            id: "56krtryt",
            // icon: "100",
            ticker: "TEST",
            price: 0,
        },
        {
            id: "asgg43ger",
            // icon: "100",
            ticker: "TEST",
            price: 0 ,
        },
    ]
}

export default async function Home() {
    const data = await getData()

    return (
      <>
          <main className="h-screen bg-slate-950" >{/*style={styles.backgroundImage}*/}
              <div className="font-mono">
                  <div style={{
                      // display: 'flex',
                      // flexDirection: 'column',
                      // alignItems: 'center',
                      // justifyContent: 'center',
                      height: '100vh'
                  }}>
                      <div className="container pt-8">
                          <span className="text-xl">Available Tickers</span>
                          <DataTable columns={columns} data={data}/>
                      </div>
                  </div>
              </div>
          </main>
          <Toaster/></>
    );
}

const styles = {
    backgroundImage: {
        backgroundImage: "url('/sunrise.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundOpacity: '0.1',
        // height: '100vh'
    },
}

//bg-slate-950