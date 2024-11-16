import React from "react";
import "../styles/home.css"

export default function HomePage(){
  return (
    <main>
      <header className="text-white">
        <h1 className="mb-3">Bem-vindo à NexusFinance HR</h1>
        <h3>
          Simplificando a gestão para você focar no que realmente importa!
        </h3>
        <a className="btn btn-primary mt-4 fs-4" href="/entrar">Começar a produzir</a>
      </header>
      <section className="container">
        <h2>Nosso objetivos</h2>
        <p>
          Na NexusFinance HR, nossa missão é transformar a gestão financeira e
          de recursos humanos da sua empresa, oferecendo uma plataforma
          integrada e eficiente. Combinamos a gestão financeira com a
          administração de pessoal, focando em facilitar processos como folha de
          pagamento, controle de benefícios e geração de relatórios, sempre com
          precisão e praticidade.
        </p>
      </section>
      <section className="container">
        <h2>Por que escolher a NexusFinance HR?</h2>
        <p>
          Nossa plataforma foi desenvolvida para proporcionar uma visão clara e
          completa do seu negócio, unindo as áreas financeira e de recursos
          humanos em um único sistema. Isso significa mais agilidade, menos
          erros e uma gestão muito mais eficiente. Queremos que sua empresa
          tenha a liberdade de se concentrar no que realmente importa, enquanto
          cuidamos das complexidades operacionais.
        </p>
      </section>
      <section className="container">
        <h2>Funcionalidades Principais</h2>
        <div className="row">
          <div className="col-6">
            <h3 className="text-center">Controle Financeiro e Contábil</h3>
            <ul>
              <li>
                <strong>Cadastro de Receitas e Despesas:</strong> Registre suas
                receitas e despesas com total flexibilidade, categorizando
                transações e criando lançamentos recorrentes.
              </li>
              <li>
                <strong>Fluxo de Caixa:</strong> Acompanhe a saúde financeira da
                sua empresa com relatórios detalhados de entradas e saídas.
              </li>
              <li>
                <strong>Contas Bancárias e Conciliação:</strong> Controle de
                múltiplas contas bancárias com integração direta aos extratos
                bancários.
              </li>
              <li>
                <strong>Relatórios Contábeis:</strong> Geração de relatórios
                completos, como DRE, Balanço Patrimonial e previsão de fluxo de
                caixa.
              </li>
            </ul>
          </div>
          <div className="col-6">
            <h3 className="text-center">Gestão de Recursos Humanos</h3>
            <ul>
              <li>
                <strong>Folha de Pagamento:</strong> Automatize o cálculo de
                salários, considerando horas extras, comissões e descontos, além
                de gerar recibos detalhados.
              </li>
              <li>
                <strong>Benefícios:</strong> Controle de todos os benefícios
                oferecidos aos seus colaboradores, com cálculo automático de
                descontos e relatórios mensais ou anuais.
              </li>
              <li>
                <strong>Documentos Legais:</strong> Organize todos os documentos
                trabalhistas, com alertas para a renovação de contratos e
                vencimento de prazos.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};