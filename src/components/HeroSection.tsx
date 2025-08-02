import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, MapPin, Clock, MessageCircle, Zap } from 'lucide-react';
import buzzyHeroImage from '@/assets/buzzy-hero.jpg';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-sky">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 mb-16">
          <div className="text-6xl animate-buzzy-bounce mb-4">🚌</div>
          
          <div className="inline-flex items-center gap-2 bg-gradient-warm text-secondary-foreground px-8 py-3 rounded-full text-lg font-medium shadow-warm">
            <Heart className="w-5 h-5 animate-pulse text-red-500" />
            Hey there! I'm Buzzy 😊
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Your caring friend for{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              stress-free commuting
            </span>{' '}
            🌟
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm here to make bus delays way less stressful! I'll track your bus in real-time, 
            predict delays with a smile, and give you the emotional support you need. 
            Because getting to class should be the <em>easy</em> part of your day! 💙
          </p>
          
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-primary/20">
            <p className="text-lg font-semibold text-primary mb-2">
              💡 "Know before you go"
            </p>
            <p className="text-muted-foreground">
              Every student deserves a caring companion for their daily commute
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-warm hover:bg-gradient-warm/90 text-secondary-foreground shadow-warm">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with Buzzy 💬
            </Button>
            <Button variant="outline" size="lg" className="border-primary/40 hover:bg-primary/5 hover:border-primary">
              <MapPin className="w-5 h-5 mr-2" />
              Track Your Routes 📍
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-warm transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
                  <p className="text-muted-foreground">
                    Know exactly where your bus is and when it'll arrive, with live updates 
                    every 30 seconds.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-warm transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Empathetic AI</h3>
                  <p className="text-muted-foreground">
                    Buzzy understands your stress and provides comforting updates with 
                    warmth and understanding.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-warm transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-calm rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Predictions</h3>
                  <p className="text-muted-foreground">
                    AI-powered delay predictions based on traffic patterns, weather, 
                    and historical data.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src={buzzyHeroImage} 
              alt="Buzzy - Your friendly transport AI companion" 
              className="relative z-10 w-full h-auto rounded-3xl shadow-glow hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold">Why Students Love Buzzy</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-warm transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">😌</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reduces Anxiety</h3>
              <p className="text-muted-foreground">
                No more stressing about whether you'll make it to class on time
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-warm transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-warm rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Saves Time</h3>
              <p className="text-muted-foreground">
                Optimize your schedule with accurate arrival predictions
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-warm transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-calm rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Provides Comfort</h3>
              <p className="text-muted-foreground">
                A caring companion who understands your daily transport struggles
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;