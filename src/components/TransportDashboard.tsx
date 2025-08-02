import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Clock, 
  Bus, 
  AlertTriangle, 
  CheckCircle, 
  Navigation,
  Route,
  Users
} from 'lucide-react';

interface BusRoute {
  id: string;
  name: string;
  status: 'on-time' | 'delayed' | 'arriving';
  currentLocation: string;
  nextStop: string;
  estimatedArrival: string;
  delay?: number;
  passengers: number;
  capacity: number;
}

const TransportDashboard = () => {
  const [routes, setRoutes] = useState<BusRoute[]>([
    {
      id: '23',
      name: 'Campus Express',
      status: 'delayed',
      currentLocation: 'Main Street & 5th Ave',
      nextStop: 'University Station',
      estimatedArrival: '8 min',
      delay: 5,
      passengers: 28,
      capacity: 40
    },
    {
      id: '15',
      name: 'Downtown Loop',
      status: 'on-time',
      currentLocation: 'City Center',
      nextStop: 'Library Plaza',
      estimatedArrival: '12 min',
      passengers: 35,
      capacity: 45
    },
    {
      id: '7',
      name: 'North Campus',
      status: 'arriving',
      currentLocation: 'Student Union',
      nextStop: 'Your Stop',
      estimatedArrival: '2 min',
      passengers: 22,
      capacity: 35
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-time':
        return 'success';
      case 'delayed':
        return 'warning';
      case 'arriving':
        return 'buzzy';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'on-time':
        return <CheckCircle className="w-4 h-4" />;
      case 'delayed':
        return <AlertTriangle className="w-4 h-4" />;
      case 'arriving':
        return <Navigation className="w-4 h-4" />;
      default:
        return <Bus className="w-4 h-4" />;
    }
  };

  const getCapacityColor = (passengers: number, capacity: number) => {
    const percentage = (passengers / capacity) * 100;
    if (percentage < 50) return 'bg-success';
    if (percentage < 80) return 'bg-warning';
    return 'bg-destructive';
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="text-4xl animate-buzzy-bounce">🚍</div>
        <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Live Transport Tracker 📍
        </h2>
        <p className="text-muted-foreground text-lg">
          Real-time updates for your daily routes - Buzzy's got your back! 😊
        </p>
      </div>

      <div className="grid gap-4">
        {routes.map((route) => (
          <Card 
            key={route.id} 
            className="transition-all duration-300 hover:shadow-warm hover:scale-[1.02] animate-bus-move"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {route.id}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{route.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Route {route.id}
                    </p>
                  </div>
                </div>
                <Badge 
                  variant={getStatusColor(route.status) as any}
                  className="flex items-center gap-1"
                >
                  {getStatusIcon(route.status)}
                  {route.status === 'delayed' ? `${route.delay}m delay` : route.status}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-medium">Current Location</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">
                    {route.currentLocation}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-medium">Next Stop</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">
                    {route.nextStop} • {route.estimatedArrival}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="font-medium">Capacity</span>
                  </div>
                  <span className="text-muted-foreground">
                    {route.passengers}/{route.capacity}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${getCapacityColor(route.passengers, route.capacity)}`}
                    style={{ 
                      width: `${Math.min((route.passengers / route.capacity) * 100, 100)}%` 
                    }}
                  />
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Route className="w-4 h-4 mr-2" />
                  View Route
                </Button>
                <Button variant="buzzy" size="sm" className="flex-1">
                  <Navigation className="w-4 h-4 mr-2" />
                  Track Live
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-warm border-0 shadow-warm">
        <CardContent className="p-6 text-center">
          <div className="text-3xl mb-3">😊</div>
          <h3 className="text-xl font-semibold mb-3 text-secondary-foreground">
            Buzzy's Friendly Update 💡
          </h3>
          <p className="text-secondary-foreground/90 leading-relaxed">
            Hey there! 👋 Bus #7 is arriving in just 2 minutes - that's your best bet to campus today! 
            No stress, I'll ping you when it's 1 minute away so you can gather your things. 
            You've got perfect timing! 🚌✨
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransportDashboard;