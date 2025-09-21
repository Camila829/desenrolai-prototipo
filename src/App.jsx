import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Handshake, FileText, Megaphone, Users } from "lucide-react";

export default function Desenrolai() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-lime-50 text-gray-800">
      <div className="p-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-lime-600 mb-6"
        >
          Desenrolaí!
        </motion.h1>

        <Tabs defaultValue="reclamacao">
          <TabsList className="grid grid-cols-4 mb-6 bg-white shadow rounded-xl">
            <TabsTrigger value="reclamacao">
              <Megaphone className="inline mr-2" /> Reclamação
            </TabsTrigger>
            <TabsTrigger value="acordo">
              <Handshake className="inline mr-2" /> Acordo
            </TabsTrigger>
            <TabsTrigger value="peticao">
              <FileText className="inline mr-2" /> Petição
            </TabsTrigger>
            <TabsTrigger value="advogados">
              <Users className="inline mr-2" /> Advogados
            </TabsTrigger>
          </TabsList>

          <TabsContent value="reclamacao">
            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Registrar Reclamação Extrajudicial</h2>
                <div className="grid gap-4">
                  <Input placeholder="Seu nome" />
                  <Input placeholder="Empresa reclamada" />
                  <Textarea placeholder="Descreva seu problema" rows={4} />
                  <Button className="bg-lime-600 hover:bg-lime-700 text-white">Enviar Reclamação</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="acordo">
            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Iniciar Negociação de Acordo</h2>
                <div className="grid gap-4">
                  <Input placeholder="Nome completo" />
                  <Input placeholder="E-mail" />
                  <Input placeholder="Empresa envolvida" />
                  <Input placeholder="Valor aproximado da dívida" />
                  <Textarea placeholder="Explique a situação" rows={4} />
                  <Button className="bg-lime-600 hover:bg-lime-700 text-white">Solicitar Acordo</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="peticao">
            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Criar Petição Inicial com IA</h2>
                <div className="grid gap-4">
                  <Input placeholder="Seu nome" />
                  <Input placeholder="E-mail para envio" />
                  <Textarea placeholder="Descreva seu problema" rows={4} />
                  <Button className="bg-lime-600 hover:bg-lime-700 text-white">Gerar Petição</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advogados">
            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Encontrar Advogados e Escritórios</h2>
                <div className="grid gap-4">
                  <Input placeholder="Buscar por cidade, estado ou especialidade" />
                  <Button className="bg-lime-600 hover:bg-lime-700 text-white">Buscar</Button>
                  <div className="text-sm text-gray-500 mt-4">
                    Listagem de advogados cadastrados será exibida aqui com opção de contato.
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <footer className="text-center text-sm text-gray-500 mt-12">
          <p>© 2025 Desenrolaí! Todos os direitos reservados.</p>
          <p className="mt-2">
            <a href="#" className="underline">Quem Somos</a> · <a href="#" className="underline">LGPD</a> · <a href="#" className="underline">Termos</a> · <a href="#" className="underline">Contato</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
