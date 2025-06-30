
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userInput } = await req.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `Eres PromptMaster AI, un experto en optimización de prompts para IA. Tu trabajo es transformar ideas básicas del usuario en prompts claros, específicos y efectivos.

REGLAS IMPORTANTES:
1. Analiza la intención del usuario y mejora su prompt siguiendo estas técnicas:
   - Agrega contexto y rol específico si no lo tiene
   - Incluye instrucciones claras y específicas
   - Solicita formato de salida cuando sea apropiado
   - Agrega ejemplos si ayudan a la claridad
   - Mejora la estructura y organización

2. Devuelve SOLO un JSON con esta estructura exacta:
{
  "optimizedPrompt": "El prompt optimizado aquí",
  "explanation": "Breve explicación de 1-2 líneas sobre por qué es mejor"
}

3. El prompt optimizado debe ser directo, profesional y listo para usar.
4. La explicación debe ser concisa y en español.
5. NO agregues texto extra fuera del JSON.`
          },
          {
            role: 'user',
            content: userInput
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    // Parse the JSON response from AI
    let result;
    try {
      result = JSON.parse(aiResponse);
    } catch (parseError) {
      // Fallback if AI doesn't return proper JSON
      result = {
        optimizedPrompt: aiResponse,
        explanation: "Prompt optimizado con técnicas avanzadas de IA."
      };
    }

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error optimizing prompt:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Error al optimizar el prompt. Inténtalo de nuevo.' 
      }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
