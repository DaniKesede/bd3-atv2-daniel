const database ='BD3-ATV2-DANIEL';
const collection ='bd3-atv2-produtos';
use(database);
db[collection].insertMany(
    [
        {
            "Nome do Produto": "Smartphone XYZ",
            "Valor (R$)": 1999,
            "Quantidade em Estoque": 30,
            "Fabricante": "TechBrand",
            "Categoria": "Eletrônicos",
            "Descrição": "Smartphone com tela de 6,5\", 128GB, 4G."
          },
          {
            "Nome do Produto": "Notebook Pro 15\"",
            "Valor (R$)": 3499,
            "Quantidade em Estoque": 15,
            "Fabricante": "PCMaker",
            "Categoria": "Informática",
            "Descrição": "Notebook com processador i7, 16GB RAM."
          },
          {
            "Nome do Produto": "Fone Bluetooth ABC",
            "Valor (R$)": 199,
            "Quantidade em Estoque": 50,
            "Fabricante": "SoundCo",
            "Categoria": "Acessórios",
            "Descrição": "Fones de ouvido sem fio com cancelamento."
          },
          {
            "Nome do Produto": "Cadeira Gamer",
            "Valor (R$)": 899,
            "Quantidade em Estoque": 20,
            "Fabricante": "GamerStyle",
            "Categoria": "Mobiliário",
            "Descrição": "Cadeira ergonômica com ajuste de altura."
          },
          {
            "Nome do Produto": "Teclado Mecânico X",
            "Valor (R$)": 299,
            "Quantidade em Estoque": 25,
            "Fabricante": "KeyMasters",
            "Categoria": "Acessórios",
            "Descrição": "Teclado mecânico com iluminação RGB."
          },
          {
            "Nome do Produto": "Monitor 24\"",
            "Valor (R$)": 1299,
            "Quantidade em Estoque": 10,
            "Fabricante": "VisionTech",
            "Categoria": "Eletrônicos",
            "Descrição": "Monitor Full HD com 75Hz."
          },
          {
            "Nome do Produto": "Impressora Multifuncional",
            "Valor (R$)": 599,
            "Quantidade em Estoque": 5,
            "Fabricante": "PrintCo",
            "Categoria": "Informática",
            "Descrição": "Impressora a jato de tinta com scanner."
          },
          {
            "Nome do Produto": "Roteador Wi-Fi 6",
            "Valor (R$)": 499,
            "Quantidade em Estoque": 12,
            "Fabricante": "NetSpeed",
            "Categoria": "Eletrônicos",
            "Descrição": "Roteador com tecnologia Wi-Fi 6."
          },
          {
            "Nome do Produto": "Câmera Digital 20MP",
            "Valor (R$)": 1299,
            "Quantidade em Estoque": 8,
            "Fabricante": "PhotoPro",
            "Categoria": "Eletrônicos",
            "Descrição": "Câmera digital com lente intercambiável."
          },
          {
            "Nome do Produto": "Caixa de Som Portátil",
            "Valor (R$)": 299,
            "Quantidade em Estoque": 22,
            "Fabricante": "SoundWave",
            "Categoria": "Acessórios",
            "Descrição": "Caixa de som Bluetooth com bateria de 10h."
          },
          {
            "Nome do Produto": "Relógio Inteligente",
            "Valor (R$)": 799,
            "Quantidade em Estoque": 16,
            "Fabricante": "TimeTech",
            "Categoria": "Acessórios",
            "Descrição": "Relógio com monitoramento de atividades."
          },
          {
            "Nome do Produto": "TV 55\" 4K",
            "Valor (R$)": 2999,
            "Quantidade em Estoque": 6,
            "Fabricante": "HomeVision",
            "Categoria": "Eletrônicos",
            "Descrição": "Televisão 4K com Smart TV."
          },
          {
            "Nome do Produto": "Geladeira Inverse",
            "Valor (R$)": 2500,
            "Quantidade em Estoque": 4,
            "Fabricante": "CoolBrand",
            "Categoria": "Eletrodomésticos",
            "Descrição": "Geladeira com tecnologia inverter."
          },
          {
            "Nome do Produto": "Fogão 5 Bocas",
            "Valor (R$)": 1299,
            "Quantidade em Estoque": 3,
            "Fabricante": "CookMaster",
            "Categoria": "Eletrodomésticos",
            "Descrição": "Fogão com acendimento automático."
          },
          {
            "Nome do Produto": "Liquidificador Turbo",
            "Valor (R$)": 249,
            "Quantidade em Estoque": 20,
            "Fabricante": "BlendTech",
            "Categoria": "Eletrodomésticos",
            "Descrição": "Liquidificador com 5 velocidades."
          },
          {
            "Nome do Produto": "Aspirador de Pó",
            "Valor (R$)": 399,
            "Quantidade em Estoque": 15,
            "Fabricante": "CleanCo",
            "Categoria": "Eletrodomésticos",
            "Descrição": "Aspirador sem fio, leve e potente."
          },
          {
            "Nome do Produto": "Jogo de Panelas",
            "Valor (R$)": 599,
            "Quantidade em Estoque": 10,
            "Fabricante": "KitchenPro",
            "Categoria": "Eletrodomésticos",
            "Descrição": "Conjunto de panelas antiaderentes."
          },
          {
            "Nome do Produto": "Mochila para Notebook",
            "Valor (R$)": 199,
            "Quantidade em Estoque": 25,
            "Fabricante": "BagMaker",
            "Categoria": "Acessórios",
            "Descrição": "Mochila com compartimento para laptop."
          },
          {
            "Nome do Produto": "Carregador Portátil",
            "Valor (R$)": 149,
            "Quantidade em Estoque": 40,
            "Fabricante": "PowerCo",
            "Categoria": "Acessórios",
            "Descrição": "Carregador portátil de alta capacidade."
          },
          {
            "Nome do Produto": "SSD 1TB",
            "Valor (R$)": 499,
            "Quantidade em Estoque": 18,
            "Fabricante": "StorageKing",
            "Categoria": "Informática",
            "Descrição": "SSD rápido, ideal para notebooks e PCs."
          },
          {
            "Nome do Produto": "Câmara de Segurança",
            "Valor (R$)": 299,
            "Quantidade em Estoque": 12,
            "Fabricante": "SecureHome",
            "Categoria": "Eletrônicos",
            "Descrição": "Câmera com visão noturna e conexão Wi-Fi."
          },
          {
            "Nome do Produto": "Tênis Esportivo",
            "Valor (R$)": 399,
            "Quantidade em Estoque": 30,
            "Fabricante": "SportStyle",
            "Categoria": "Calçados",
            "Descrição": "Tênis confortável para corridas."
          },
          {
            "Nome do Produto": "Blusa Feminina",
            "Valor (R$)": 99,
            "Quantidade em Estoque": 50,
            "Fabricante": "FashionCo",
            "Categoria": "Vestuário",
            "Descrição": "Blusa de algodão, várias cores."
          },
          {
            "Nome do Produto": "Calça Jeans Masculina",
            "Valor (R$)": 199,
            "Quantidade em Estoque": 25,
            "Fabricante": "DenimWorks",
            "Categoria": "Vestuário",
            "Descrição": "Calça jeans de corte clássico."
          },
          {
            "Nome do Produto": "Vestido de Festa",
            "Valor (R$)": 299,
            "Quantidade em Estoque": 15,
            "Fabricante": "ChicDress",
            "Categoria": "Vestuário",
            "Descrição": "Vestido elegante para ocasiões especiais."
          },
          {
            "Nome do Produto": "Relógio de Pulso",
            "Valor (R$)": 149,
            "Quantidade em Estoque": 40,
            "Fabricante": "TimeStyle",
            "Categoria": "Acessórios",
            "Descrição": "Relógio casual com pulseira de couro."
          },
          {
            "Nome do Produto": "Óculos de Sol",
            "Valor (R$)": 249,
            "Quantidade em Estoque": 35,
            "Fabricante": "SunGuard",
            "Categoria": "Acessórios",
            "Descrição": "Óculos de sol com proteção UV."
          },
          {
            "Nome do Produto": "Perfume Masculino",
            "Valor (R$)": 159,
            "Quantidade em Estoque": 20,
            "Fabricante": "FragranceCo",
            "Categoria": "Beleza",
            "Descrição": "Perfume com notas amadeiradas."
          },
          {
            "Nome do Produto": "Kit de Maquiagem",
            "Valor (R$)": 299,
            "Quantidade em Estoque": 10,
            "Fabricante": "BeautyGlam",
            "Categoria": "Beleza",
            "Descrição": "Kit completo com maquiagem para todos os tipos."
          },
          {
            "Nome do Produto": "Shampoo Hidratante",
            "Valor (R$)": 49,
            "Quantidade em Estoque": 50,
            "Fabricante": "HairCare",
            "Categoria": "Beleza",
            "Descrição": "Shampoo para cabelos secos e danificados."
          },
          {
            "Nome do Produto": "Condicionador",
            "Valor (R$)": 49,
            "Quantidade em Estoque": 50,
            "Fabricante": "HairCare",
            "Categoria": "Beleza",
            "Descrição": "Condicionador para hidratação intensa."
          },
          {
            "Nome do Produto": "Sabonete Líquido",
            "Valor (R$)": 19,
            "Quantidade em Estoque": 100,
            "Fabricante": "CleanSkin",
            "Categoria": "Beleza",
            "Descrição": "Sabonete líquido com ingredientes naturais."
          },
          {
            "Nome do Produto": "Desodorante Spray",
            "Valor (R$)": 29,
            "Quantidade em Estoque": 60,
            "Fabricante": "FreshFeel",
            "Categoria": "Beleza",
            "Descrição": "Desodorante spray de longa duração."
          },
          {
            "Nome do Produto": "Cama Queen Size",
            "Valor (R$)": 1199,
            "Quantidade em Estoque": 5,
            "Fabricante": "ComfortBed",
            "Categoria": "Mobiliário",
            "Descrição": "Cama com colchão de espuma."
          },
          {
            "Nome do Produto": "Sofá 3 Lugares",
            "Valor (R$)": 1899,
            "Quantidade em Estoque": 2,
            "Fabricante": "HomeComfort",
            "Categoria": "Mobiliário",
            "Descrição": "Sofá moderno, revestido em tecido."
          },
          {
            "Nome do Produto": "Mesa de Jantar",
            "Valor (R$)": 1499,
            "Quantidade em Estoque": 3,
            "Fabricante": "FurnitureCo",
            "Categoria": "Mobiliário",
            "Descrição": "Mesa de jantar em madeira maciça."
          },
          {
            "Nome do Produto": "Estante de Livros",
            "Valor (R$)": 399,
            "Quantidade em Estoque": 8,
            "Fabricante": "BookWorld",
            "Categoria": "Mobiliário",
            "Descrição": "Estante para livros e decoração."
          },
          {
            "Nome do Produto": "Guarda-Roupa 4 Portas",
            "Valor (R$)": 1899,
            "Quantidade em Estoque": 2,
            "Fabricante": "HomeStorage",
            "Categoria": "Mobiliário",
            "Descrição": "Guarda-roupa com amplo espaço e espelho."
          },
          {
            "Nome do Produto": "Bicicleta Aro 26",
            "Valor (R$)": 899,
            "Quantidade em Estoque": 15,
            "Fabricante": "BikeMasters",
            "Categoria": "Esportes",
            "Descrição": "Bicicleta ideal para trilhas e passeios."
          },
          {
            "Nome do Produto": "Skate Completo",
            "Valor (R$)": 299,
            "Quantidade em Estoque": 20,
            "Fabricante": "SkateStyle",
            "Categoria": "Esportes",
            "Descrição": "Skate completo para iniciantes."
          },
          {
            "Nome do Produto": "Equipamento de Ginástica",
            "Valor (R$)": 499,
            "Quantidade em Estoque": 10,
            "Fabricante": "FitPro",
            "Categoria": "Esportes",
            "Descrição": "Conjunto de pesos e colchonete."
          },
          {
            "Nome do Produto": "Livro de Culinária",
            "Valor (R$)": 59,
            "Quantidade em Estoque": 30,
            "Fabricante": "BookStore",
            "Categoria": "Livros",
            "Descrição": "Livro com receitas práticas e saborosas."
          },
          {
            "Nome do Produto": "Curso Online de Inglês",
            "Valor (R$)": 199,
            "Quantidade em Estoque": "Ilimitado",
            "Fabricante": "EduTech",
            "Categoria": "Educação",
            "Descrição": "Curso interativo para aprender inglês."
          },
          {
            "Nome do Produto": "Câmera Instantânea",
            "Valor (R$)": 499,
            "Quantidade em Estoque": 12,
            "Fabricante": "PhotoSnap",
            "Categoria": "Eletrônicos",
            "Descrição": "Câmera instantânea com impressão rápida."
          },
          {
            "Nome do Produto": "Drone com Câmera",
            "Valor (R$)": 2.499,
            "Quantidade em Estoque": 8,
            "Fabricante": "SkyView",
            "Categoria": "Eletrônicos",
            "Descrição": "Drone com câmera 4K e controle remoto."
          },
          {
            "Nome do Produto": "Console de Videogame",
            "Valor (R$)": 3.499,
            "Quantidade em Estoque": 5,
            "Fabricante": "GameStation",
            "Categoria": "Eletrônicos",
            "Descrição": "Console de última geração com 1TB de armazenamento."
          },
          {
            "Nome do Produto": "Controlador de Jogos",
            "Valor (R$)": 199,
            "Quantidade em Estoque": 30,
            "Fabricante": "PlayControl",
            "Categoria": "Acessórios",
            "Descrição": "Controlador wireless compatível com vários consoles."
          },
          {
            "Nome do Produto": "Mouse Gamer RGB",
            "Valor (R$)": 149,
            "Quantidade em Estoque": 25,
            "Fabricante": "GamerGear",
            "Categoria": "Acessórios",
            "Descrição": "Mouse gamer com iluminação RGB e alta precisão."
          },
          {
            "Nome do Produto": "Placa de Vídeo",
            "Valor (R$)": 1.599,
            "Quantidade em Estoque": 10,
            "Fabricante": "GraphicPro",
            "Categoria": "Informática",
            "Descrição": "Placa de vídeo para jogos em alta definição."
          },
          {
            "Nome do Produto": "Caixa de Som Bluetooth",
            "Valor (R$)": 349,
            "Quantidade em Estoque": 15,
            "Fabricante": "SoundMaster",
            "Categoria": "Acessórios",
            "Descrição": "Caixa de som portátil com conexão Bluetooth."
          },
          {
            "Nome do Produto": "Relógio Smart Fitness",
            "Valor (R$)": 499,
            "Quantidade em Estoque": 20,
            "Fabricante": "FitWatch",
            "Categoria": "Acessórios",
            "Descrição": "Relógio inteligente com monitoramento de saúde."
          },
          {
            "Nome do Produto": "Jogo de Cama Casal",
            "Valor (R$)": 199,
            "Quantidade em Estoque": 30,
            "Fabricante": "HomeTextiles",
            "Categoria": "Mobiliário",
            "Descrição": "Jogo de cama em 100% algodão."
          },
          {
            "Nome do Produto": "Toalha de Banho",
            "Valor (R$)": 39,
            "Quantidade em Estoque": 50,
            "Fabricante": "HomeTextiles",
            "Categoria": "Mobiliário",
            "Descrição": "Toalha de banho macia e absorvente."
          },
          {
            "Nome do Produto": "Abajur de Mesa",
            "Valor (R$)": 99,
            "Quantidade em Estoque": 15,
            "Fabricante": "LightDecor",
            "Categoria": "Mobiliário",
            "Descrição": "Abajur moderno para decoração."
          },
          {
            "Nome do Produto": "Tapete para Sala",
            "Valor (R$)": 299,
            "Quantidade em Estoque": 10,
            "Fabricante": "HomeStyle",
            "Categoria": "Mobiliário",
            "Descrição": "Tapete macio, ideal para sala de estar."
          },
          {
            "Nome do Produto": "Relógio de Parede",
            "Valor (R$)": 79,
            "Quantidade em Estoque": 25,
            "Fabricante": "TimeDecor",
            "Categoria": "Mobiliário",
            "Descrição": "Relógio de parede com design moderno."
          },
          {
            "Nome do Produto": "Capa de Sofá",
            "Valor (R$)": 199,
            "Quantidade em Estoque": 20,
            "Fabricante": "HomeStyle",
            "Categoria": "Mobiliário",
            "Descrição": "Capa de sofá em tecido elástico."
          },
          {
            "Nome do Produto": "Cortina de Sala",
            "Valor (R$)": 149,
            "Quantidade em Estoque": 12,
            "Fabricante": "HomeDecor",
            "Categoria": "Mobiliário",
            "Descrição": "Cortina blackout, várias cores."
          },
          {
            "Nome do Produto": "Conjunto de Copos",
            "Valor (R$)": 59,
            "Quantidade em Estoque": 40,
            "Fabricante": "TablewareCo",
            "Categoria": "Cozinha",
            "Descrição": "Conjunto com 6 copos de vidro."
          },
          {
            "Nome do Produto": "Panelas de Pressão",
            "Valor (R$)": 199,
            "Quantidade em Estoque": 15,
            "Fabricante": "KitchenPro",
            "Categoria": "Cozinha",
            "Descrição": "Conjunto de panelas de pressão."
          },
          {
            "Nome do Produto": "Frigideira Antiaderente",
            "Valor (R$)": 99,
            "Quantidade em Estoque": 25,
            "Fabricante": "CookMaster",
            "Categoria": "Cozinha",
            "Descrição": "Frigideira antiaderente de 28cm."
          },
          {
            "Nome do Produto": "Conjunto de Talheres",
            "Valor (R$)": 79,
            "Quantidade em Estoque": 30,
            "Fabricante": "TablewareCo",
            "Categoria": "Cozinha",
            "Descrição": "Conjunto com 24 peças de talheres."
          },
          {
            "Nome do Produto": "Balde de Gelo",
            "Valor (R$)": 39,
            "Quantidade em Estoque": 50,
            "Fabricante": "PartyEssentials",
            "Categoria": "Cozinha",
            "Descrição": "Balde de gelo em inox."
          },
          {
            "Nome do Produto": "Panela Wok",
            "Valor (R$)": 149,
            "Quantidade em Estoque": 10,
            "Fabricante": "CookMaster",
            "Categoria": "Cozinha",
            "Descrição": "Panela wok antiaderente."
          },
          {
            "Nome do Produto": "Saca-Rolhas",
            "Valor (R$)": 29,
            "Quantidade em Estoque": 60,
            "Fabricante": "PartyEssentials",
            "Categoria": "Cozinha",
            "Descrição": "Saca-rolhas em aço inox."
          },
          {
            "Nome do Produto": "Bandeja de Madeira",
            "Valor (R$)": 49,
            "Quantidade em Estoque": 25,
            "Fabricante": "TablewareCo",
            "Categoria": "Cozinha",
            "Descrição": "Bandeja de madeira natural."
          }
    ]
);