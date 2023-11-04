// Підключаємо технологію express для back-end сервера
const express = require('express')
const { EvalSourceMapDevToolPlugin } = require('webpack')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
// class User {
//   static #list = []

//   constructor(email, login, password) {
//     this.email = email
//     this.login = login
//     this.password = password
//     this.id = new Date().getTime()
//   }

//   verifyPassword = (password) => this.password === password

//   static add = (user) => {
//     this.#list.push(user)
//   }

//   static getList = () => this.#list

//   static getById = (id) =>
//     this.#list.find((user) => user.id === id)

//   static deleteById = (id) => {
//     const index = this.#list.findIndex(
//       (user) => user.id === id,
//     )
//     if (index !== -1) {
//       this.#list.splice(index, 1)
//       return true
//     } else {
//       return false
//     }
//   }

//   static updateById = (id, data) => {
//     const user = this.getById(id)
//     if (user) {
//       this.update(user, data)
//       return true
//     } else {
//       return false
//     }
//   }

//   static update = (user, { email }) => {
//     if (email) {
//       user.email = email
//     }
//   }
// }

// ================================================================
// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
// router.get('/', function (req, res) {
//   // res.render генерує нам HTML сторінку

//   const list = User.getList()

//   // ↙️ cюди вводимо назву файлу з сontainer
//   res.render('index', {
//     // вказуємо назву папки контейнера, в якій знаходяться наші стилі
//     style: 'index',

//     data: {
//       users: {
//         list,
//         isEmpty: list.length === 0,
//       },
//     },
//   })
//   // ↑↑ сюди вводимо JSON дані
// })

// ================================================================
// router.post('/user-create', function (req, res) {
//   const { email, login, password } = req.body

//   const user = new User(email, login, password)
//   User.add(user)

//   console.log(User.getList())

//   res.render('succes-info', {
//     style: 'succes-info',
//     info: 'Користувача створено',
//   })
// })
// ================================================================
// router.get('/user-delete', function (req, res) {
//   const { id } = req.query

//   User.deleteById(Number(id))

//   res.render('succes-info', {
//     style: 'succes-info',
//     info: 'Користувача видалено',
//   })
// })
// ================================================================
// router.post('/user-update', function (req, res) {
//   const { email, password, id } = req.body

//   const user = User.getById(Number(id))

//   let result = false

//   if (user.verifyPassword(password)) {
//     User.update(user, { email })
//     result = true
//   }
//   res.render('succes-info', {
//     style: 'succes-info',
//     info: result
//       ? 'Email пошта оновлена'
//       : 'Сталася помилка',
//   })
// })
// ================================================================
// ==========================================================================     CRUD product
class Product {
  static #list = []

  constructor(name, price, description) {
    this.name = name
    this.price = price
    this.description = description
    this.id = new Date().getTime()
  }

  static add = (product) => {
    this.#list.push(product)
  }

  static getList = () => this.#list

  static getById = (id) =>
    this.#list.find((product) => product.id === id)

  static deleteById = (id) => {
    const index = this.#list.findIndex(
      (product) => product.id === id,
    )
    if (index !== -1) {
      this.#list.splice(index, 1)
      return true
    } else {
      return false
    }
  }

  static updateById = (id, data) => {
    const product = this.getById(id)
    if (product) {
      this.update(product, data)
      return true
    } else {
      return false
    }
  }

  static update = (product, { name }) => {
    if (name) {
      product.name = name
    }
  }
}
// ================================================================
router.get('/', function (req, res) {
  const list = Product.getList()

  res.render('index', {
    style: 'index',

    data: {
      products: {
        list,
        isEmpty: list.length === 0,
      },
    },
  })
})
// ================================================================
router.post('/product-create', function (req, res) {
  const { name, price, description } = req.body

  const product = new Product(name, price, description)
  Product.add(product)

  console.log(Product.getList())

  res.render('product-create', {
    style: 'product-create',
    info: 'Товар створено',
  })
})
// ================================================================
router.get('/product-delete', function (req, res) {
  const { id } = req.query

  Product.deleteById(Number(id))

  res.render('alert', {
    style: 'alert',
    info: 'Товар видалено',
  })
})
// ==============================================
router.get('/product-list', function (req, res) {
  res.render('product-list', {
    style: 'product-list',
    card: [
      {
        name: 'Стильна сукня',
        description:
          'Елегантна сукня з натуральної тканини для особливих випадків',
        id: 1234567890,
        price: 1500,
      },
      {
        name: 'Спортивні кросівки',
        description:
          'Зручні та стильні кросівки для активного способу життя',
        id: 9876543210,
        price: 1200,
      },
      {
        name: 'Сонячні окуляри',
        description:
          'Модні окуляри з високоякісними лінзами для захисту очей від сонця',
        id: 5555555555,
        price: 800,
      },
      {
        name: 'Чоловічий годинник',
        description:
          'Елегантний годинник з механічним механізмом і сталевим браслетом',
        id: 7777777777,
        price: 2500,
      },
      {
        name: 'Жіночий рюкзак',
        description:
          'Стильний рюкзак на всі випадки життя, з великими кишенями і відділами для різних речей',
        id: 8888888888,
        price: 900,
      },
      {
        name: 'Парасолька',
        description:
          'Компактна парасолька з автоматичним механізмом',
        id: 9999999999,
        price: 1100,
      },
      {
        name: 'Столові прибори',
        description:
          'Набір столових приборів зі сталі, які виготовлені в класичному стилі',
        id: 1111111111,
        price: 400,
      },
      {
        name: 'Шкіряний гаманець',
        description:
          'Гаманець з натуральної шкіри з багатьма відділеннями',
        id: 2222222222,
        price: 1000,
      },
      {
        name: 'Фітнес-браслет',
        description:
          'Браслет для відстеження фізичної активності та вимірюванням тиску',
        id: 9999999999,
        price: 3000,
      },
    ],
  })
})
// ==============================================

router.get('/product-edit', function (req, res) {
  const { id } = req.query

  const product = Product.getById(Number(id))

  res.render('product-edit', {
    style: 'product-edit',
  })
})
// ==============================================
router.post('/product-edit', function (req, res) {
  const { name, price, description } = req.body

  let result = false

  if (product) {
    Product.update(Number(id), {
      name,
      description,
      price,
    })
    result = true
  }

  res.render('product-edit', {
    style: 'product-edit',
    info: result
      ? 'Дані товара оновлено'
      : 'Сталася помилка',
  })
})
module.exports = router
