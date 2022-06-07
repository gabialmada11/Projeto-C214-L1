import React,{useState} from "react"

export default function App(){

  const [valorTela, setValorTela]=useState('')
  const [resultado, setResultado]=useState(0)
  const [acumulador, setAcumulador]=useState(0)
  const [operado, setOperado]=useState(false)

  //Componentes
  const Tela=(valor, res)=>{
    return (
      <div style={cssTela}>
        <span style={cssTelaOp}>{valor}</span>
        <span style={cssTelaRes}>{res}</span>
      </div>
    )
  }

  const Botao=(label, onClick)=>{
    return(
      <button style={cssBotao} onClick={onClick}>{label}</button>
    )
  }

  //Funções
  const addDigitoTela=(d)=>{
    if((d=='+' || d=='-' || d=='*' || d=='/') && operado){
      console.log('+-*/')
      setOperado(false)
      setValorTela(resultado+d)
      return
    }
    if(operado){
      setValorTela(d)
      setOperado(false)
      return
    }
    const valorDigitadoTela=valorTela+d
    setValorTela(valorDigitadoTela)
  }

  const limparMemoria=()=>{
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }

  const Operacao=(op)=>{
    //apagar um valor a esquerda
    if(op=='bs'){
      let vtela=valorTela
      vtela=vtela.substring(0,(vtela.length-1))
      setValorTela(vtela)
      setOperado(false)
      return
    }
    try{
      const r=eval(valorTela) //calculo
      setAcumulador(r)
      setResultado(r)
      setOperado(true)
      return
    }
    catch{
      setResultado('Erro')
    }
  }

  //Configuracoes da tela
  const cssTela={
    display:'flex',
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'center',
    alignItems:'flex-start',
    backgroundColor:'#444',
    flexDirection:'column',
    width:260
  }

  //display de operacao
  const cssTelaOp={
    fontSize:25,
    color:'#fff',
    height:20
  }

  //display do resultado
  const cssTelaRes={
    fontSize:50,
    color:'#fff',
  }

  //configuracao botao
  const cssBotao={
    fontSize:30,
    height:75,
    width:75,
    padding:20,
    backgroundColor:'#000',
    color:'#fff',
    borderColor:'#000',
    textAlign:'center',
    outLine:'none'
  }

  //formatacao da calculadora
  const cssConteiner={
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'column',
    width:300,
    border:'1px solid #000'
  }

  //configurar botoes
  const cssBotoes={
    flexDirection:'row',
    flexWrap:'wrap'
  }
  return (
    <> 
      <div style={cssConteiner}>
        <h3>Calculadora Simples</h3>
        {Tela(valorTela, resultado)}
        <div style={cssBotoes}>
          {Botao('AC', limparMemoria)}
          {Botao('(', ()=>addDigitoTela('('))}
          {Botao(')', ()=>addDigitoTela(')'))}
          {Botao('/', ()=>addDigitoTela('/'))}
          {Botao('7', ()=>addDigitoTela('7'))}
          {Botao('8', ()=>addDigitoTela('8'))}
          {Botao('9', ()=>addDigitoTela('9'))}
          {Botao('*', ()=>addDigitoTela('*'))}
          {Botao('4', ()=>addDigitoTela('4'))}
          {Botao('5', ()=>addDigitoTela('5'))}
          {Botao('6', ()=>addDigitoTela('6'))}
          {Botao('-', ()=>addDigitoTela('-'))}
          {Botao('1', ()=>addDigitoTela('1'))}
          {Botao('2', ()=>addDigitoTela('2'))}
          {Botao('3', ()=>addDigitoTela('3'))}
          {Botao('+', ()=>addDigitoTela('+'))}
          {Botao('0', ()=>addDigitoTela('0'))}
          {Botao('.', ()=>addDigitoTela('.'))}
          {Botao('C', ()=>Operacao('bs'))}
          {Botao('=', ()=>Operacao(''))}
        </div>
      </div>
    </>

  );
}
