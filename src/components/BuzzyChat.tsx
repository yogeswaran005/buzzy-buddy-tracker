import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Send, Mic, MicOff, MapPin, Clock, Heart } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  type?: 'delay' | 'arrival' | 'general';
}

const BuzzyChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm Buzzy, your friendly transport companion! 🚌 I'm here to help you track your buses and make your commute stress-free. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
      type: 'general'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    // Simulate Buzzy's empathetic response
    setTimeout(() => {
      const buzzyResponse = generateBuzzyResponse(inputValue);
      setMessages(prev => [...prev, buzzyResponse]);
    }, 1000);
  };

  const generateBuzzyResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    let response = "";
    let type: 'delay' | 'arrival' | 'general' = 'general';

    if (input.includes('late') || input.includes('delay')) {
      response = "Oh no! I can see you're concerned about delays. Let me check the real-time status for you... 🕐 Bus #23 is currently running 8 minutes late due to traffic on Main Street. I know this is stressful when you have class, but don't worry - I'll keep you updated every step of the way! ❤️";
      type = 'delay';
    } else if (input.includes('bus') || input.includes('route')) {
      response = "Let me help you with bus information! 🚌 I can see your usual Route #23 to campus. The next bus arrives in 12 minutes at University Station. I'll send you a gentle reminder 5 minutes before it arrives so you don't have to worry about missing it! 😊";
      type = 'arrival';
    } else if (input.includes('stress') || input.includes('worried')) {
      response = "I understand how stressful transport delays can be, especially when you're trying to get to class or work. Take a deep breath - I'm here with you! 🌸 Let me check all your options and find the best way to get you there safely and on time.";
      type = 'general';
    } else {
      response = "I'm listening and here to help! 😊 Whether you need bus times, route information, or just want to chat about your commute, I've got you covered. What would be most helpful for you right now?";
    }

    return {
      id: Date.now().toString(),
      text: response,
      isUser: false,
      timestamp: new Date(),
      type
    };
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    // In a real app, this would start/stop speech recognition
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        setInputValue("When is my next bus?");
      }, 2000);
    }
  };

  const getMessageStyle = (type?: string) => {
    switch (type) {
      case 'delay':
        return 'border-l-4 border-warning bg-warning/5';
      case 'arrival':
        return 'border-l-4 border-success bg-success/5';
      default:
        return 'border-l-4 border-primary bg-primary/5';
    }
  };

  return (
    <Card className="h-[600px] flex flex-col bg-gradient-to-br from-background to-accent/20 shadow-warm">
      <div className="p-4 border-b bg-gradient-primary text-white rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-buzzy-bounce">
            <Heart className="w-6 h-6 text-warning fill-current" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Buzzy</h3>
            <p className="text-white/90 text-sm">Your caring transport companion</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-xl transition-all duration-300 ${
                message.isUser
                  ? 'bg-primary text-primary-foreground ml-4 rounded-tr-sm'
                  : `bg-card text-card-foreground mr-4 rounded-tl-sm ${getMessageStyle(message.type)}`
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
              <span className="text-xs opacity-70 mt-1 block">
                {message.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t bg-card/50">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask Buzzy about your bus..."
              className="pr-12 rounded-xl border-primary/20 focus:border-primary"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button
              onClick={toggleListening}
              variant="ghost"
              size="icon"
              className={`absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 ${
                isListening ? 'text-warning animate-pulse' : 'text-muted-foreground'
              }`}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </Button>
          </div>
          <Button
            onClick={handleSendMessage}
            variant="buzzy"
            size="icon"
            className="rounded-xl"
            disabled={!inputValue.trim()}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Buzzy is here to help with empathy and care ❤️
        </p>
      </div>
    </Card>
  );
};

export default BuzzyChat;