// Geração automática de páginas diárias para SEO

const hoje = new Date();
const dia = hoje.getDate();
const mes = hoje.getMonth() + 1;
const ano = hoje.getFullYear();

const slug = `resultado-pavao-de-ouro-${dia}-${mes}-${ano}.html`;

if (!localStorage.getItem(slug)) {

const novaPagina = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<title>Resultado Pavão de Ouro ${dia}/${mes}/${ano}</title>
<meta name="description" content="Resultado da banca pavão de ouro ${dia}/${mes}/${ano} atualizado.">
<link rel="canonical" href="https://www.pavaodeouro.net/${slug}">
</head>
<body>
<h1>Resultado Pavão de Ouro ${dia}/${mes}/${ano}</h1>
<p>Confira o resultado completo atualizado.</p>

<script src="https://quge5.com/88/tag.min.js"
data-zone="213149"
async
data-cfasync="false"></script>

</body>
</html>
`;

console.log("Nova página SEO gerada:", slug);

localStorage.setItem(slug, "criada");
}
