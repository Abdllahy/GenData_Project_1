"use client";

import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Label } from "../components/ui/label";

interface DashboardSectionProps {
  className?: string;
}

export default function DashboardSection({
  className = "",
}: DashboardSectionProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [iframeHeight, setIframeHeight] = useState<number>(600);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setIframeHeight(400);
      else if (width < 1024) setIframeHeight(500);
      else setIframeHeight(600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dashboards = [
    {
      id: "ai-content",
      title: "AI Generated Content",
      url: "https://public.tableau.com/views/BiggestAIcontentgeneratedbycountry/BiggestAIContentbycountry",
    },
    {
      id: "ai-adoption",
      title: "AI Adoption Rates",
      url: "https://public.tableau.com/views/HighestAIadoptionindifferentcountries/HighestAIAdoption",
    },
    {
      id: "revenue-impact",
      title: "Revenue Impact",
      url: "https://public.tableau.com/views/HighestincreaseinrevenueduetoAI/HighestincreaseinrevenueduetoAI",
    },
    {
      id: "job-loss",
      title: "Job Loss Statistics",
      url: "https://public.tableau.com/views/JoblossduetoAI/JoblossduetoAI",
    },
    {
      id: "ai-tools",
      title: "Top AI Tools",
      url: "https://public.tableau.com/views/TopAItools/TopAItools",
    },
    {
      id: "consumer-trust",
      title: "Consumer Trust",
      url: "https://public.tableau.com/views/RelationshipbetweenAIandconsumertrust/AIandConsumertrust",
    },
    {
      id: "market-share",
      title: "AI Market Share",
      url: "https://public.tableau.com/views/AImarketsharebycountry/AImarketsharebycountry",
    },
    {
      id: "regulation-trust",
      title: "Regulation & Trust",
      url: "https://public.tableau.com/views/Howregulationtypesaffecttrustlevels/Howdoregulationtypesaffecttrustlevels",
    },
  ];

  const getEmbedUrl = (baseUrl: string) => {
    let url = `${baseUrl}?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Fpublic.tableau.com%2F&:embed_code_version=3&:tabs=no&:toolbar=yes&:animate_transition=yes&:display_static_image=no&:display_spinner=yes&:display_overlay=yes&:display_count=yes&:language=en-US`;
    if (selectedCountry !== "all") url += `&Country=${selectedCountry}`;
    if (selectedIndustry !== "all") url += `&Industry=${selectedIndustry}`;
    return url;
  };

  return (
    <div className={`w-full bg-background p-4 md:p-6 lg:p-8 ${className}`}>
      {/* Background Section */}
      <div className="mb-12 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
          The Impact of AI: A Data-Driven Exploration
        </h1>
        <p className="text-lg text-muted-foreground">
          This project explores how Artificial Intelligence is reshaping
          industries and societies around the globe from 2020 to 2025. Using
          Tableau dashboards, we visualize trends in AI content generation,
          adoption, job impact, and market perception across countries and
          industries. Our mission is to provide a comprehensive look at AI’s
          reach—empowering policymakers, companies, and individuals to make
          data-informed decisions.
        </p>
      </div>

      {/* Dashboard Header */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-indigo-600">
        AI Impact Analysis Dashboard
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
        Explore the comprehensive impact of AI through our interactive
        visualization. Discover insights on adoption, revenue growth, and
        industry transformation.
      </p>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="w-full md:w-1/2">
          <Label htmlFor="country-filter" className="mb-2 block">
            Filter by Country
          </Label>
          <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger id="country-filter" className="w-full">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Countries</SelectItem>
              <SelectItem value="United States">United States</SelectItem>
              <SelectItem value="China">China</SelectItem>
              <SelectItem value="Germany">Germany</SelectItem>
              <SelectItem value="Japan">Japan</SelectItem>
              <SelectItem value="United Kingdom">United Kingdom</SelectItem>
              <SelectItem value="France">France</SelectItem>
              <SelectItem value="India">India</SelectItem>
              <SelectItem value="Canada">Canada</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-1/2">
          <Label htmlFor="industry-filter" className="mb-2 block">
            Filter by Industry
          </Label>
          <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
            <SelectTrigger id="industry-filter" className="w-full">
              <SelectValue placeholder="Select Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              <SelectItem value="Automotive">Automotive</SelectItem>
              <SelectItem value="Healthcare">Healthcare</SelectItem>
              <SelectItem value="Finance">Finance</SelectItem>
              <SelectItem value="Technology">Technology</SelectItem>
              <SelectItem value="Retail">Retail</SelectItem>
              <SelectItem value="Manufacturing">Manufacturing</SelectItem>
              <SelectItem value="Gaming">Gaming</SelectItem>
              <SelectItem value="Education">Education</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Dashboard Tabs */}
      <Card className="border rounded-lg overflow-hidden">
        <Tabs defaultValue="ai-content" className="w-full">
          <TabsList className="w-full overflow-x-auto flex flex-nowrap justify-start p-0 bg-muted/20">
            {dashboards.map((dashboard) => (
              <TabsTrigger
                key={dashboard.id}
                value={dashboard.id}
                className="flex-shrink-0 px-3 py-2 text-sm"
              >
                {dashboard.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {dashboards.map((dashboard) => (
            <TabsContent
              key={dashboard.id}
              value={dashboard.id}
              className="p-0"
            >
              <CardContent className="p-0">
                <div
                  className="relative w-full"
                  style={{ height: `${iframeHeight}px` }}
                >
                  <iframe
                    src={getEmbedUrl(dashboard.url)}
                    frameBorder="0"
                    className="absolute top-0 left-0 w-full h-full"
                    title={dashboard.title}
                    allowFullScreen
                  />
                </div>
                <div className="p-4 bg-muted/10">
                  <h3 className="font-medium">{dashboard.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {dashboard.id === "ai-content" &&
                      "Explore the volume of AI-generated content across different countries."}
                    {dashboard.id === "ai-adoption" &&
                      "Compare AI adoption rates across different countries and industries."}
                    {dashboard.id === "revenue-impact" &&
                      "Analyze how AI implementation has impacted revenue across industries."}
                    {dashboard.id === "job-loss" &&
                      "Examine job displacement statistics due to AI automation by country."}
                    {dashboard.id === "ai-tools" &&
                      "Discover which AI tools are most widely used across different sectors."}
                    {dashboard.id === "consumer-trust" &&
                      "Understand the relationship between AI implementation and consumer trust."}
                    {dashboard.id === "market-share" &&
                      "Compare AI market share of companies by country."}
                    {dashboard.id === "regulation-trust" &&
                      "Analyze how different regulation types affect trust in AI technologies."}
                  </p>
                </div>
              </CardContent>
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </div>
  );
}
