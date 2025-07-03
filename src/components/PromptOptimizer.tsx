import { useState } from 'react';
import { Sparkles, Copy, Lightbulb, ArrowRight, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const PromptOptimizer = () => {
  const [userInput, setUserInput] = useState('');
  const [optimizedPrompt, setOptimizedPrompt] = useState('');
  const [tip, setTip] = useState('');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('https://n8n-n8n.zdkcmv.easypanel.host/webhook/2bcf1bc5-b23e-4ad7-9aba-1fe6293be019');
  const [showSettings, setShowSettings] = useState(false);
  const { toast } = useToast();

  const optimizePrompt = async () => {
    if (!userInput.trim()) {
      toast({
        title: "¡Ups!",
        description: "Por favor, escribe algo para optimizar.",
        variant: "destructive",
      });
      return;
    }

    if (!webhookUrl.trim()) {
      toast({
        title: "Error de configuración",
        description: "Por favor, configura la URL del webhook en ajustes.",
        variant: "destructive",
      });
      return;
    }

    setIsOptimizing(true);

    try {
      console.log('Enviando solicitud al webhook n8n:', webhookUrl);
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: userInput.trim()
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Respuesta del webhook:', data);

      // Usar la propiedad "response" como especificaste
      const optimizedText = data.response || '';

      if (!optimizedText) {
        throw new Error('No se recibió una respuesta válida del webhook');
      }

      setOptimizedPrompt(optimizedText);
      setTip('Prompt optimizado usando IA avanzada.');

      toast({
        title: "¡Prompt optimizado!",
        description: "Tu prompt ha sido mejorado con IA y está listo para usar.",
      });

    } catch (error) {
      console.error('Error optimizing prompt:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al conectar con el servicio de optimización. Verifica la URL del webhook.",
        variant: "destructive",
      });
    } finally {
      setIsOptimizing(false);
    }
  };

  const copyToClipboard = async () => {
    if (!optimizedPrompt) return;

    try {
      await navigator.clipboard.writeText(optimizedPrompt);
      toast({
        title: "¡Copiado!",
        description: "El prompt optimizado se copió al portapapeles.",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "No se pudo copiar el texto. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 px-4 py-2 rounded-full border border-neon-blue/30 mb-4">
          <Sparkles className="w-4 h-4 text-neon-blue" />
          <span className="text-sm text-neon-blue font-medium">Optimización de Prompt IA</span>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <h1 className="text-4xl md:text-6xl font-bold neon-text mb-4 animate-float">
            Transforma tus ideas
          </h1>
          <Dialog open={showSettings} onOpenChange={setShowSettings}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-neon-blue/30 hover:border-neon-blue hover:bg-neon-blue/10"
              >
                <Settings className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900 border-slate-700">
              <DialogHeader>
                <DialogTitle className="text-white">Configuración del Webhook</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">
                    URL del Webhook de n8n
                  </label>
                  <Input
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    placeholder="https://n8n-n8n.zdkcmv.easypanel.host/webhook/..."
                    className="bg-slate-800 border-slate-600 text-white"
                  />
                  <p className="text-xs text-slate-400 mt-1">
                    Esta URL debe apuntar a tu webhook de n8n configurado para optimizar prompts
                  </p>
                </div>
                <Button
                  onClick={() => setShowSettings(false)}
                  className="w-full bg-neon-blue hover:bg-neon-blue/80"
                >
                  Guardar
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Convierte cualquier idea en un prompt optimizado y efectivo para IA. 
          Sin complicaciones, sin tecnicismos.
        </p>
      </div>

      {/* Input Section */}
      <div className="futuristic-card p-8 space-y-6">
        <div className="space-y-3">
          <label className="text-lg font-semibold text-white flex items-center space-x-2">
            <ArrowRight className="w-5 h-5 text-neon-blue" />
            <span>¿Qué quieres lograr con la IA?</span>
          </label>
          <Textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ejemplo: Quiero que me ayude a escribir un email profesional para solicitar una reunión con mi jefe..."
            className="min-h-[120px] bg-slate-800/50 border-slate-600 focus:border-neon-blue focus:ring-neon-blue text-white placeholder-slate-400 text-lg resize-none"
          />
        </div>

        <Button
          onClick={optimizePrompt}
          disabled={isOptimizing || !userInput.trim()}
          className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isOptimizing ? (
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Optimizando con IA...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Optimizar Prompt</span>
            </div>
          )}
        </Button>
      </div>

      {/* Results Section */}
      {optimizedPrompt && (
        <div className="futuristic-card p-8 space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-neon-green" />
              <span>Tu Prompt Optimizado</span>
            </h3>
            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copiar
            </Button>
          </div>

          <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
            <p className="text-white leading-relaxed font-mono text-sm md:text-base">
              {optimizedPrompt}
            </p>
          </div>

          {tip && (
            <div className="bg-gradient-to-r from-neon-green/10 to-neon-blue/10 rounded-lg p-4 border border-neon-green/30">
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neon-green mb-1">¿Por qué es mejor?</h4>
                  <p className="text-slate-300 text-sm">{tip}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PromptOptimizer;
