import { Button } from "@/components/ui/button"
import TradingViewWidget from "@/components/ui/TradingViewWidget"
import { HEATMAP_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from "@/lib/constants"

const Home = () => {

const scruptUrl=`https://s3.tradingview.com/external-embedding/embed-widget-`

  return (
    <div className="flex min-h-screen home-wrapper">
      <section className="grid w-full gap-8 home-scetion">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingViewWidget
          title="Market Overview"
          scriptUrl={`${scruptUrl}market-overview.js`}
          config={MARKET_OVERVIEW_WIDGET_CONFIG}
          className="custom_chart"
          height={600}
          />
          </div>

          <div className="md-col-span-1 xl:col-span-2">
            <TradingViewWidget
          title="Stock Heatmap"
          scriptUrl={`${scruptUrl}stock-heatmap.js`}
          config={HEATMAP_WIDGET_CONFIG}
          className="custom_chart"
          height={600}
          />
          </div>
          </section>

          <section className="grid w-full gap-8 home-scetion">
        <div className="h-full md:col-span-1 xl:col-span-1">
          <TradingViewWidget
          title="Market Overview"
          scriptUrl={`${scruptUrl}timeline.js`}
          config={TOP_STORIES_WIDGET_CONFIG}
          className="custom_chart"
          height={600}
          />
          </div>

          <div className="h-full md:col-span-1 xl:col-span-2">
            <TradingViewWidget
          title="Stock Heatmap"
          scriptUrl={`${scruptUrl}market-quotes.js`}
          config={MARKET_DATA_WIDGET_CONFIG}
          className="custom_chart"
          height={600}
          />
          </div>
          </section>

    </div>
  )
}

export default Home;