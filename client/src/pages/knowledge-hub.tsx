import { useState } from "react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 
import { ArrowRight } from "lucide-react";
 
const videos = [
  {
    id: 1,
    title: "Dashboard Overview",
    description: "Get a complete overview of leads, quotes, orders, emails, and active users in one place.",
    url: "/videos/Dashboard.mp4",
  },
  {
    id: 2,
    title: "Leads Page Tutorial",
    description: "View, assign, and convert leads into quotes. Search and click to see full lead details.",
    url: "/videos/Leadsindex.mp4",
  },
  {
    id: 3,
    title: "Lead Details Tutorial",
    description: "Check lead info, quote, origin & destination, customer info, tariff, notes, and convert to quote or order.",
    url: "/videos/LeadsInfo.mp4",
  },
  {
    id: 4,
    title: "Order Dispatch Tutorial",
    description: "Post loads, assign carriers, and dispatch orders directly from the CRM with a single click.",
    url: "/videos/OrderDetails.mp4",
  },
];

export default function VideoHub() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <Layout> 
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Knowledge Hub
            </h1>
            <p className="text-lg text-muted-foreground">
              Watch quick tutorials and overview videos to get the most out of Caps CRM.
            </p>
          </div>
        </div>
      </section>
 
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {videos.map((video) => (
              <Card key={video.id} className="hover-elevate flex flex-col cursor-pointer" onClick={() => setActiveVideo(video)}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-snug">{video.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground flex-1">{video.description}</p>
                  <div className="flex justify-end pt-4 border-t">
                    <Button variant="outline" size="sm" onClick={() => setActiveVideo(video)}>
                      Watch Video <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
        {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-3xl p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setActiveVideo(null)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">{activeVideo.title}</h2>
            <p className="text-muted-foreground mb-4">{activeVideo.description}</p>
            <video className="w-full rounded" controls autoPlay>
              <source src={activeVideo.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

    </Layout>
  );
}
