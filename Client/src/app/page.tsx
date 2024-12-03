import { Box, Container, Typography, List, ListItem, ListItemText } from "@mui/material";

const HomePage = () => {
  return (
    <main>
      <Box sx={{ backgroundColor: "primary.main", color: "white", py: 10 }}>
        <Container>
          <Typography variant='h1' component='h1'>
            Bem-vindo à NexusFinance HR
          </Typography>
          <Typography variant='h3'>
            Simplificando a gestão para você focar no que realmente importa!
          </Typography>
        </Container>
      </Box>

      <section
        id='sobre-nos'
        style={{
          backgroundColor: "#303030",
          color: "white",
          padding: "40px 0",
        }}
      >
        <Container>
          <Typography variant='h2' align='center' sx={{ mb: 3 }}>
            Sobre nós
          </Typography>
          <Typography variant='h4' sx={{ mb: 2 }}>
            Nosso objetivos
          </Typography>
          <Typography variant='body1'>
            Na NexusFinance HR, nossa missão é transformar a gestão financeira e de recursos humanos da sua
            empresa, oferecendo uma plataforma integrada e eficiente. Combinamos a gestão financeira com a
            administração de pessoal, focando em facilitar processos como folha de pagamento, controle de
            benefícios e geração de relatórios, sempre com precisão e praticidade.
          </Typography>

          <Typography variant='h4' sx={{ mt: 4 }}>
            Por que escolher a NexusFinance HR?
          </Typography>
          <Typography variant='body1' sx={{ mt: 2 }}>
            Nossa plataforma foi desenvolvida para proporcionar uma visão clara e completa do seu negócio,
            unindo as áreas financeira e de recursos humanos em um único sistema. Isso significa mais
            agilidade, menos erros e uma gestão muito mais eficiente. Queremos que sua empresa tenha a
            liberdade de se concentrar no que realmente importa, enquanto cuidamos das complexidades
            operacionais.
          </Typography>
        </Container>
      </section>

      <section
        id='funcionalidades'
        style={{
          backgroundColor: "#303030",
          color: "white",
          padding: "40px 0",
        }}
      >
        <Container>
          <Typography variant='h2' align='center' sx={{ mb: 3 }}>
            Funcionalidades principais
          </Typography>

          {/* Layout responsivo com Box */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            {/* Controle Financeiro e Contábil */}
            <Box sx={{ flex: "1 1 45%", textAlign: "center" }}>
              <Typography variant='h4' sx={{ mb: 2 }}>
                Controle Financeiro e Contábil
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary='Cadastro de Receitas e Despesas'
                    secondary='Registre suas receitas e despesas com total flexibilidade, categorizando transações e criando lançamentos recorrentes.'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='Fluxo de Caixa'
                    secondary='Acompanhe a saúde financeira da sua empresa com relatórios detalhados de entradas e saídas.'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='Contas Bancárias e Conciliação'
                    secondary='Controle de múltiplas contas bancárias com integração direta aos extratos bancários.'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='Relatórios Contábeis'
                    secondary='Geração de relatórios completos, como DRE, Balanço Patrimonial e previsão de fluxo de caixa.'
                  />
                </ListItem>
              </List>
            </Box>

            {/* Gestão de Recursos Humanos */}
            <Box sx={{ flex: "1 1 45%", textAlign: "center" }}>
              <Typography variant='h4' sx={{ mb: 2 }}>
                Gestão de Recursos Humanos
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary='Folha de Pagamento'
                    secondary='Automatize o cálculo de salários, considerando horas extras, comissões e descontos, além de gerar recibos detalhados.'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='Benefícios'
                    secondary='Controle de todos os benefícios oferecidos aos seus colaboradores, com cálculo automático de descontos e relatórios mensais ou anuais.'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='Documentos Legais'
                    secondary='Organize todos os documentos trabalhistas, com alertas para a renovação de contratos e vencimento de prazos.'
                  />
                </ListItem>
              </List>
            </Box>
          </Box>
        </Container>
      </section>
    </main>
  );
};

export default HomePage;
