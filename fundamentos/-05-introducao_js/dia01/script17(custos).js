const custoProduto = 3;
const valorVenda = 4;

if (custoProduto >= 0 && valorVenda >= 0){
    const custoTotalProduto = custoProduto * 1.2;
    const totalDaVenda = (valorVenda - custoTotalProduto) * 1000;
    console.log(totalDaVenda);
} else {
    console.log ("Erro!")
}