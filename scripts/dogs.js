const dogs = [
    
        {
            "id": 1,
            "name": "Чара",
            "favorite": false,
            "rate": 10,
            "age": 2,
            "description": "Пудель – невероятно энергичное и жизнерадостное, озорное существо, которое обожает дурачиться, и в любое время суток готов к играм и развлечениям.",
            "image": "https://images.prismic.io/doge/c5c2d5d0-fae5-4934-b607-b5651f7c9dda_554454713_23.jpg?auto=compress,format&rect=427,0,1002,1002&w=456&h=456api/sites/default/files/2022-01/064AEBCB-45EC-4CE7-AB13-C65F10F00B7B.jpeg"
        },
        {
            "id": 2,
            "name": "Зевс",
            "favorite": false,
            "rate": 4,
            "age": 4,
            "description": "Немецкая овчарка – крупная порода собак с универсальными рабочими качествами. Позиционируется как прекрасный и верный друг семьи, излучающий поток позитивной энергии.",
            "image": "https://images.prismic.io/doge/09017f98-80ac-44d6-bbe8-e4bf739cade5_cute_dogs-19.jpg?auto=compress,format&rect=512,0,1200,1200&w=456&h=456"
        },
        {
            "id": 3,
            "name": "Рокки",
            "favorite": true,
            "rate": 8,
            "age": 5,
            "description": "Восточносибирская лайка – отличная собака для охоты и в качестве ездовой для упряжек. Среди всех известных лаек охотничьей группы является самой крупной. Лайки - прекрасные компаньоны, но они однолюбы, поэтому не стоит покупать взрослую собаку, поскольку будет всегда тосковать за прежним владельцем.",
            "image": "https://images.prismic.io/doge/82b93f4c-3b08-4ea0-a911-cf2c38328810_vostochno-sibirskaya-lajka.jpg?auto=compress,format&rect=79,0,472,472&w=456&h=456"
        },
        {
            "id": 4,
            "name": "Мартин",
            "favorite": true,
            "rate": 5,
            "age": 1,
            "description": "Бигль – одна из самых популярных пород в мире. Эти собаки обладают удивительным характером, в них нет ни капли агрессивности или злости. Своими умными карими глазами бигли покоряют сердца людей всех возрастов.",
            "image": "https://images.prismic.io/doge/07799188-ab75-4d2d-bcb7-53a4f0a89fe0_tild6435-3534-4336-a536-626533383637__20120405_gaf_uv5_026.webp?auto=compress,format&rect=120,0,480,480&w=456&h=456"
        },
        {
            "id": 5,
            "name": "Блеки",
            "favorite": false,
            "rate": 9,
            "age": 3,
            "description": "Далматин – энергичное и дружелюбное с высоким уровнем интеллектуальности животное, которое и минуты не может обойтись без активных занятий. Далматин – многогранная личность с магически притягательной внешностью. Яркая элегантность, прекрасно сложенное атлетическое тело и выраженная физическая выносливость собаки завораживает с первого взгляда.",
            "image": "https://images.prismic.io/doge/7bc1cee2-adfd-4461-80e9-68295030d0ce_3891a7d163b0684ef612866c80eac282.jpg?auto=compress,format&rect=212,0,600,600&w=456&h=456"
        },
        {
            "id": 6,
            "name": "Оливия",
            "favorite": true,
            "rate": 7,
            "age": 6,
            "description": "Такса – охотничья коротконогая собака, одна из самых узнаваемых в мире.Она чрезвычайно активная, словно на батарейках. Представителям этой породы интересно абсолютно всё, она преследует все, что двигается. Таксы отличаются умом, хорошим обонянием и преданностью своей семье.",
            "image": "https://images.prismic.io/doge/6d849c0a-e9c7-4841-bcc3-1fc936597117_slivki_7.jpg?auto=compress,format&rect=320,0,1280,1280&w=456&h=456"
        },
        {
            "id": 7,
            "name": "Билли",
            "favorite": false,
            "rate": 2,
            "description": "Померанский шпиц – маленький пушистый комочек с милой мордочкой, который станет верным другом, веселым компаньоном и храбрым защитником. Непоседа просто обожает активные прогулки на свежем воздухе.",
            "image": "https://images.prismic.io/doge/18441fd3-e398-4a74-b977-442f471bcb08_image1.jpg?auto=compress,format&rect=0,0,1080,1080&w=456&h=456"
        },
        {
            "id": 8,
            "name": "Спайк",
            "favorite": false,
            "rate": 2,
            "age": 5,
            "description": "Вельш-корги пемброк- низкорослая собачка с короткими лапками, крепкого телосложения, довольно компактная. Похожа на лисичку. Ранее использовался валлийскими фермерами в качестве пастухов для выпаса крупного рогатого скота. Общительный и дружелюбный, приятный компаньон. Способен на самые глупые вещи, потому что на самом деле ничего не боится.",
            "image": "https://images.prismic.io/doge/a94ea3e3-34a8-4dfd-a955-83ad47737746_velsh-korgi_pembrok_5.jpg?auto=compress,format&rect=0,0,600,600&w=456&h=456"
        },
        
    ]