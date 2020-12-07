(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(6),o=n.n(r),s=(n(17),n(1)),c=n.n(s),l=n(2),d=n(7),u=n(8),p=n(10),m=n(9),y=n(11),f=n(4),b=n(3),g=n.n(b),v=function(){return new Promise((function(e,t){window.addEventListener("load",Object(l.a)(c.a.mark((function n(){var a,i,r,o;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.ethereum){n.next=13;break}return a=new g.a(window.ethereum),n.prev=2,n.next=5,window.ethereum.enable();case 5:e(a),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),t(n.t0);case 11:n.next=14;break;case 13:window.web3?(i=window.web3,console.log("Injected web3 detected."),e(i)):(r=new g.a.providers.HttpProvider("http://127.0.0.1:8545"),o=new g.a(r),console.log("No web3 instance injected, using Local web3."),e(o));case 14:case"end":return n.stop()}}),n,null,[[2,8]])}))))}))},S=(n(20),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={storageValue:0,web3:null,accounts:null,contract:null},n.componentDidMount=Object(l.a)(c.a.mark((function e(){var t,a,i,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:return t=e.sent,e.next=6,t.eth.getAccounts();case 6:return a=e.sent,e.next=9,t.eth.net.getId();case 9:i=e.sent,r=f.networks[i],o=new t.eth.Contract(f.abi,r&&r.address),n.setState({web3:t,accounts:a,contract:o},n.runExample),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),alert("Failed to load web3, accounts, or contract. Check console for details."),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,15]])}))),n.runExample=Object(l.a)(c.a.mark((function e(){var t,a,i,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.accounts,i=t.contract,console.log("accounts",a,"\n"),console.log("state:",n.state),e.next=5,i.methods.set(3).send({from:a[0]});case 5:return e.next=7,i.methods.get().call();case 7:r=e.sent,n.setState({storageValue:r});case 9:case"end":return e.stop()}}),e)}))),n}return Object(y.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.web3?i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Good to Go!"),i.a.createElement("p",null,"Your Truffle Box is installed and ready."),i.a.createElement("h2",null,"Smart Contract Example"),i.a.createElement("p",null,"If your contracts compiled and migrated successfully, below will show a stored value of 5 (by default)."),i.a.createElement("p",null,"Try changing the value stored on ",i.a.createElement("strong",null,"line 40")," of App.js."),i.a.createElement("div",null,"The stored value is: ",this.state.storageValue)):i.a.createElement("div",null,"Loading Web3, accounts, and contract...")}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e){e.exports=JSON.parse('{"contractName":"SimpleStorage","abi":[{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"get","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}],"metadata":"{\\"compiler\\":{\\"version\\":\\"0.6.11+commit.5ef660b1\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"inputs\\":[],\\"name\\":\\"get\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"x\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"set\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"kind\\":\\"dev\\",\\"methods\\":{},\\"version\\":1},\\"userdoc\\":{\\"kind\\":\\"user\\",\\"methods\\":{},\\"version\\":1}},\\"settings\\":{\\"compilationTarget\\":{\\"/home/andrei/Alyra/Alyra_Blockchain_depot/Integration_Livraison/Simple_Storage_Deployment/contracts/SimpleStorage.sol\\":\\"SimpleStorage\\"},\\"evmVersion\\":\\"byzantium\\",\\"libraries\\":{},\\"metadata\\":{\\"bytecodeHash\\":\\"ipfs\\"},\\"optimizer\\":{\\"enabled\\":false,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"/home/andrei/Alyra/Alyra_Blockchain_depot/Integration_Livraison/Simple_Storage_Deployment/contracts/SimpleStorage.sol\\":{\\"keccak256\\":\\"0x512df1603c5f878921707d236bc53d974afe05b4d9de4b6094249bac5ab60efe\\",\\"license\\":\\"MIT\\",\\"urls\\":[\\"bzz-raw://0d6de97971b1c387f984fa7ea1d9ec10f8a63d68cc63bf8bd00d8c3a7c9e3ee1\\",\\"dweb:/ipfs/Qmbt92T34sHzedfJjDsvbisvLhRtghNwS6VW8tqrGkrqTD\\"]}},\\"version\\":1}","bytecode":"0x608060405234801561001057600080fd5b5060e48061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610604f576000357c01000000000000000000000000000000000000000000000000000000009004806360fe47b11460545780636d4ce63c14607f575b600080fd5b607d60048036036020811015606857600080fd5b8101908080359060200190929190505050609b565b005b608560a5565b6040518082815260200191505060405180910390f35b8060008190555050565b6000805490509056fea26469706673582212208d96380a56a5f8dd1c69e0622babd6300018e475dadc922265b5c511b94533f564736f6c634300060b0033","deployedBytecode":"0x6080604052348015600f57600080fd5b5060043610604f576000357c01000000000000000000000000000000000000000000000000000000009004806360fe47b11460545780636d4ce63c14607f575b600080fd5b607d60048036036020811015606857600080fd5b8101908080359060200190929190505050609b565b005b608560a5565b6040518082815260200191505060405180910390f35b8060008190555050565b6000805490509056fea26469706673582212208d96380a56a5f8dd1c69e0622babd6300018e475dadc922265b5c511b94533f564736f6c634300060b0033","immutableReferences":{},"sourceMap":"66:176:1:-:0;;;;;;;;;;;;;;;;;;;","deployedSourceMap":"66:176:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;113:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;170:70;;;:::i;:::-;;;;;;;;;;;;;;;;;;;113:53;160:1;147:10;:14;;;;113:53;:::o;170:70::-;206:4;225:10;;218:17;;170:70;:::o","source":"// SPDX-License-Identifier: MIT\\npragma solidity >=0.4.21 <0.7.0;\\n\\ncontract SimpleStorage {\\n  uint storedData;\\n\\n  function set(uint x) public {\\n    storedData = x;\\n  }\\n\\n  function get() public view returns (uint) {\\n    return storedData;\\n  }\\n}\\n","sourcePath":"/home/andrei/Alyra/Alyra_Blockchain_depot/Integration_Livraison/Simple_Storage_Deployment/contracts/SimpleStorage.sol","ast":{"absolutePath":"/home/andrei/Alyra/Alyra_Blockchain_depot/Integration_Livraison/Simple_Storage_Deployment/contracts/SimpleStorage.sol","exportedSymbols":{"SimpleStorage":[59]},"id":60,"license":"MIT","nodeType":"SourceUnit","nodes":[{"id":38,"literals":["solidity",">=","0.4",".21","<","0.7",".0"],"nodeType":"PragmaDirective","src":"32:32:1"},{"abstract":false,"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":59,"linearizedBaseContracts":[59],"name":"SimpleStorage","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":40,"mutability":"mutable","name":"storedData","nodeType":"VariableDeclaration","overrides":null,"scope":59,"src":"93:15:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":39,"name":"uint","nodeType":"ElementaryTypeName","src":"93:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"body":{"id":49,"nodeType":"Block","src":"141:25:1","statements":[{"expression":{"argumentTypes":null,"id":47,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":45,"name":"storedData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"147:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":46,"name":"x","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":42,"src":"160:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"147:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":48,"nodeType":"ExpressionStatement","src":"147:14:1"}]},"documentation":null,"functionSelector":"60fe47b1","id":50,"implemented":true,"kind":"function","modifiers":[],"name":"set","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":43,"nodeType":"ParameterList","parameters":[{"constant":false,"id":42,"mutability":"mutable","name":"x","nodeType":"VariableDeclaration","overrides":null,"scope":50,"src":"126:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":41,"name":"uint","nodeType":"ElementaryTypeName","src":"126:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"125:8:1"},"returnParameters":{"id":44,"nodeType":"ParameterList","parameters":[],"src":"141:0:1"},"scope":59,"src":"113:53:1","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":57,"nodeType":"Block","src":"212:28:1","statements":[{"expression":{"argumentTypes":null,"id":55,"name":"storedData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"225:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":54,"id":56,"nodeType":"Return","src":"218:17:1"}]},"documentation":null,"functionSelector":"6d4ce63c","id":58,"implemented":true,"kind":"function","modifiers":[],"name":"get","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":51,"nodeType":"ParameterList","parameters":[],"src":"182:2:1"},"returnParameters":{"id":54,"nodeType":"ParameterList","parameters":[{"constant":false,"id":53,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":58,"src":"206:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":52,"name":"uint","nodeType":"ElementaryTypeName","src":"206:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"205:6:1"},"scope":59,"src":"170:70:1","stateMutability":"view","virtual":false,"visibility":"public"}],"scope":60,"src":"66:176:1"}],"src":"32:211:1"},"legacyAST":{"absolutePath":"/home/andrei/Alyra/Alyra_Blockchain_depot/Integration_Livraison/Simple_Storage_Deployment/contracts/SimpleStorage.sol","exportedSymbols":{"SimpleStorage":[59]},"id":60,"license":"MIT","nodeType":"SourceUnit","nodes":[{"id":38,"literals":["solidity",">=","0.4",".21","<","0.7",".0"],"nodeType":"PragmaDirective","src":"32:32:1"},{"abstract":false,"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":59,"linearizedBaseContracts":[59],"name":"SimpleStorage","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":40,"mutability":"mutable","name":"storedData","nodeType":"VariableDeclaration","overrides":null,"scope":59,"src":"93:15:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":39,"name":"uint","nodeType":"ElementaryTypeName","src":"93:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"body":{"id":49,"nodeType":"Block","src":"141:25:1","statements":[{"expression":{"argumentTypes":null,"id":47,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":45,"name":"storedData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"147:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":46,"name":"x","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":42,"src":"160:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"147:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":48,"nodeType":"ExpressionStatement","src":"147:14:1"}]},"documentation":null,"functionSelector":"60fe47b1","id":50,"implemented":true,"kind":"function","modifiers":[],"name":"set","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":43,"nodeType":"ParameterList","parameters":[{"constant":false,"id":42,"mutability":"mutable","name":"x","nodeType":"VariableDeclaration","overrides":null,"scope":50,"src":"126:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":41,"name":"uint","nodeType":"ElementaryTypeName","src":"126:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"125:8:1"},"returnParameters":{"id":44,"nodeType":"ParameterList","parameters":[],"src":"141:0:1"},"scope":59,"src":"113:53:1","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":57,"nodeType":"Block","src":"212:28:1","statements":[{"expression":{"argumentTypes":null,"id":55,"name":"storedData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"225:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":54,"id":56,"nodeType":"Return","src":"218:17:1"}]},"documentation":null,"functionSelector":"6d4ce63c","id":58,"implemented":true,"kind":"function","modifiers":[],"name":"get","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":51,"nodeType":"ParameterList","parameters":[],"src":"182:2:1"},"returnParameters":{"id":54,"nodeType":"ParameterList","parameters":[{"constant":false,"id":53,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":58,"src":"206:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":52,"name":"uint","nodeType":"ElementaryTypeName","src":"206:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"205:6:1"},"scope":59,"src":"170:70:1","stateMutability":"view","virtual":false,"visibility":"public"}],"scope":60,"src":"66:176:1"}],"src":"32:211:1"},"compiler":{"name":"solc","version":"0.6.11+commit.5ef660b1.Emscripten.clang"},"networks":{"3":{"events":{},"links":{},"address":"0xE7eE4042A6dacF9553c7a55b492e29821D005914","transactionHash":"0x1cf3ee0789083f60ac62679636a6740084ec930793d3a9370e452c9f9e7e5d55"}},"schemaVersion":"3.3.1","updatedAt":"2020-12-07T13:52:57.324Z","networkType":"ethereum","devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}}')}},[[12,1,2]]]);
//# sourceMappingURL=main.5fcff1e0.chunk.js.map