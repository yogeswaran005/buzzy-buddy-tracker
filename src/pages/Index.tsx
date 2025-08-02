import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageCircle, MapPin, Settings, Heart } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import BuzzyChat from '@/components/BuzzyChat';
import TransportDashboard from '@/components/TransportDashboard';

const Index = () => {
  const [currentView, setCurrentView] = useState<'hero' | 'app'>('hero');

  if (currentView === 'hero') {
    return (
      <div className="min-h-screen">
        <HeroSection />
        <div className="fixed bottom-8 right-8">
          <Button
            onClick={() => setCurrentView('app')}
            variant="hero"
            size="lg"
            className="shadow-glow animate-buzzy-bounce"
          >
            <Heart className="w-5 h-5 mr-2" />
            Try Buzzy Now
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-primary/5">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white animate-pulse" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Buzzy Transport</h1>
                <p className="text-sm text-muted-foreground">Your caring companion</p>
              </div>
            </div>
            <Button
              onClick={() => setCurrentView('hero')}
              variant="outline"
              size="sm"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px] mx-auto">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Chat</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <TransportDashboard />
          </TabsContent>

          <TabsContent value="chat" className="space-y-6">
            <div className="max-w-4xl mx-auto">
              <BuzzyChat />
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Coming Soon!</h2>
                <p className="text-muted-foreground">
                  Buzzy is working on personalized settings, route preferences, 
                  and notification customization just for you! ❤️
                </p>
              </div>
              
              <div className="grid gap-4 text-left">
                <div className="p-4 bg-card rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-lg mb-2">🔔 Smart Notifications</h3>
                  <p className="text-muted-foreground">
                    Customize when and how Buzzy sends you updates
                  </p>
                </div>
                
                <div className="p-4 bg-card rounded-lg border border-secondary/20">
                  <h3 className="font-semibold text-lg mb-2">🚌 Favorite Routes</h3>
                  <p className="text-muted-foreground">
                    Save your daily routes for quick access
                  </p>
                </div>
                
                <div className="p-4 bg-card rounded-lg border border-success/20">
                  <h3 className="font-semibold text-lg mb-2">🎯 Personal Preferences</h3>
                  <p className="text-muted-foreground">
                    Tell Buzzy about your schedule and preferences
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
