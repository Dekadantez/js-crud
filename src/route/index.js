// Підключаємо технологію express для back-end сервера
const express = require('express')
const { EvalSourceMapDevToolPlugin } = require('webpack')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================///////////////////// CRUD USER //////==========
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
// ================================================================///////////////////// CRUD PRODUCT //////==========
// class Product {
//   static #list = []

//   constructor(name, price, description) {
//     this.name = name
//     this.price = price
//     this.description = description
//     this.id = new Date().getTime()
//   }

//   static add = (product) => {
//     this.#list.push(product)
//   }

//   static getList = () => this.#list

//   static getById = (id) =>
//     this.#list.find((product) => product.id === id)

//   static deleteById = (id) => {
//     const index = this.#list.findIndex(
//       (product) => product.id === id,
//     )
//     if (index !== -1) {
//       this.#list.splice(index, 1)
//       return true
//     } else {
//       return false
//     }
//   }

//   static updateById = (id, data) => {
//     const product = this.getById(id)
//     if (product) {
//       this.update(product, data)
//       return true
//     } else {
//       return false
//     }
//   }

//   static update = (product, { name }) => {
//     if (name) {
//       product.name = name
//     }
//   }
// }
// // ================================================================
// router.get('/', function (req, res) {
//   const list = Product.getList()

//   res.render('index', {
//     style: 'index',

//     data: {
//       products: {
//         list,
//         isEmpty: list.length === 0,
//       },
//     },
//   })
// })
// // ================================================================
// router.post('/product-create', function (req, res) {
//   const { name, price, description } = req.body

//   const product = new Product(name, price, description)
//   Product.add(product)

//   console.log(Product.getList())

//   res.render('product-create', {
//     style: 'product-create',
//     info: 'Товар створено',
//   })
// })
// // ================================================================
// router.get('/product-delete', function (req, res) {
//   const { id } = req.query

//   Product.deleteById(Number(id))

//   res.render('alert', {
//     style: 'alert',
//     info: 'Товар видалено',
//   })
// })
// // ==============================================
// router.get('/product-list', function (req, res) {
//   res.render('product-list', {
//     style: 'product-list',
//     card: [
//       {
//         name: 'Стильна сукня',
//         description:
//           'Елегантна сукня з натуральної тканини для особливих випадків',
//         id: 1234567890,
//         price: 1500,
//       },
//       {
//         name: 'Спортивні кросівки',
//         description:
//           'Зручні та стильні кросівки для активного способу життя',
//         id: 9876543210,
//         price: 1200,
//       },
//       {
//         name: 'Сонячні окуляри',
//         description:
//           'Модні окуляри з високоякісними лінзами для захисту очей від сонця',
//         id: 5555555555,
//         price: 800,
//       },
//       {
//         name: 'Чоловічий годинник',
//         description:
//           'Елегантний годинник з механічним механізмом і сталевим браслетом',
//         id: 7777777777,
//         price: 2500,
//       },
//       {
//         name: 'Жіночий рюкзак',
//         description:
//           'Стильний рюкзак на всі випадки життя, з великими кишенями і відділами для різних речей',
//         id: 8888888888,
//         price: 900,
//       },
//       {
//         name: 'Парасолька',
//         description:
//           'Компактна парасолька з автоматичним механізмом',
//         id: 9999999999,
//         price: 1100,
//       },
//       {
//         name: 'Столові прибори',
//         description:
//           'Набір столових приборів зі сталі, які виготовлені в класичному стилі',
//         id: 1111111111,
//         price: 400,
//       },
//       {
//         name: 'Шкіряний гаманець',
//         description:
//           'Гаманець з натуральної шкіри з багатьма відділеннями',
//         id: 2222222222,
//         price: 1000,
//       },
//       {
//         name: 'Фітнес-браслет',
//         description:
//           'Браслет для відстеження фізичної активності та вимірюванням тиску',
//         id: 9999999999,
//         price: 3000,
//       },
//     ],
//   })
// })
// // ==============================================

// router.get('/product-edit', function (req, res) {
//   const { id } = req.query

//   const product = Product.getById(Number(id))

//   res.render('product-edit', {
//     style: 'product-edit',
//   })
// })
// // ==============================================
// router.post('/product-edit', function (req, res) {
//   const { name, price, description } = req.body

//   let result = false

//   if (product) {
//     Product.update(Number(id), {
//       name,
//       description,
//       price,
//     })
//     result = true
//   }

//   res.render('product-edit', {
//     style: 'product-edit',
//     info: result
//       ? 'Дані товара оновлено'
//       : 'Сталася помилка',
//   })
// })

// ================================================================///////////////////// CRUD ORDER //////==========

//=========================================================
class Product {
  static #list = []
  static #count = 0
  constructor(
    img,
    title,
    description,
    category,
    price,
    amount = 0,
  ) {
    // this.id = Product.#list.length + 1 //генеруємо унікальний ID для товару
    this.id = ++Product.#count //генеруємо унікальний ID для товару
    this.img = img
    this.title = title
    this.description = description
    this.category = category
    this.price = price
    this.amount = amount
  }
  static add = (...data) => {
    const newProduct = new Product(...data)

    this.#list.push(newProduct)
  }
  static getList = () => {
    return this.#list
  }
  static getById = (id) => {
    return this.#list.find((product) => product.id === id)
  }
  static getRandomList = (id) => {
    //Фільтруємо товари, щоб вилучитит той, з яким порівнюємо id
    const filteredList = this.#list.filter(
      (product) => product.id !== id,
    )
    const shuffledList = filteredList.sort(
      //Сортуємо за допомогою Math.random та перемішуємо масив
      () => Math.random() - 0.5,
    )
    //Повертаємо перші 3 елементи з перемішаного масиву
    return shuffledList.slice(0, 3)
  }
}

Product.add(
  'https://picsum.photos/200/300',
  'Комп`ютер ARTLINE Gaming X63 (X63v26)',
  'AMD Ryzen 5 5600 / RAM 16ГБ / SSD 1ТБ / nVidia GeForce RTX 3060 Ti 8ГБ',
  [
    { id: 1, text: 'Готовий до відправки' },
    { id: 2, text: 'Топ продажів' },
  ],
  27000, //price
  10, //amount
)
Product.add(
  'https://picsum.photos/200/300',
  'Комп`ютер ARTLINE Gaming D31 (D31v04)',
  'Дисплей 7" / 1280*800 / Intel Core i5-13400F / Водяне охолодження CPU / 32GB DDR4-3600 / SSD 1TB NVMe',
  [{ id: 2, text: 'Топ продажів' }],
  20000,
  10, //amount
)
Product.add(
  'https://picsum.photos/200/300',
  'Комп`ютер Cobra Advanced I14F.16.H1S4.166S.6368',
  'Intel Core i5 10400F / Gigabyte H470M / Iridium X RAM 16ГБ / HDD 1ТБ + SSD 480ГБ',
  [{ id: 1, text: 'Готовий до відправки' }],
  40000,
  10, //amount
)
//=========================================================
//=========================================================
class Purchase {
  static DELIVERY_PRICE = 150
  static #BONUS_FACTOR = 0.1

  static #count = 0
  static #list = []

  static #bonusAccount = new Map()

  static getBonusBalance = (email) => {
    return Purchase.#bonusAccount.get(email) || 0
  }

  static calcBonusAmount = (value) => {
    return value * Purchase.#BONUS_FACTOR
  }

  static updateBonusBalance = (
    email,
    price,
    bonusUse = 0,
  ) => {
    const amount = this.calcBonusAmount(price)

    const currentBalance = Purchase.getBonusBalance(email)

    const updateBalance = currentBalance + amount - bonusUse

    Purchase.#bonusAccount.set(email, updateBalance)

    console.log(email, updateBalance)

    return amount
  }

  constructor(data, product) {
    this.id = ++Purchase.#count

    this.firstname = data.firstname
    this.lastname = data.lastname

    this.phone = data.phone
    this.email = data.email

    this.comment = data.comment || null

    this.bonus = data.bonus || 0

    this.promocode = data.promocode || null

    this.totalPrice = data.totalPrice
    this.productPrice = data.productPrice
    this.deliveryPrice = data.deliveryPrice
    this.amount = data.amount

    this.product = product
  }
  static add = (...arg) => {
    const newPurchase = new Purchase(...arg)

    this.#list.push(newPurchase)

    newPurchase.product.amount -= newPurchase.amount

    return newPurchase
  }

  static getList = () => {
    return Purchase.#list.reverse().map((purchase) => ({
      id: purchase.id,
      product: purchase.product.title,
      totalPrice: purchase.totalPrice,
      bonus: Purchase.calcBonusAmount(purchase.totalPrice),
      // firstname: purchase.firstname,
      // lastname: purchase.lastname,
      // phone: purchase.phone,
      // email: purchase.email,
      // comment: purchase.comment,
      // deliveryPrice: purchase.deliveryPrice,
      // productPrice: purchase.productPrice,
    }))
  }

  static getById = (id) => {
    return Purchase.#list.find((item) => item.id === id)
  }

  static updateById = (id, data) => {
    const purchase = Purchase.getById(id)
    if (purchase) {
      if (data.firstname)
        purchase.firstname = data.firstname
      if (data.lastname) purchase.lastname = data.lastname
      if (data.phone) purchase.phone = data.phone
      if (data.email) purchase.email = data.email
      if (data.delivery) purchase.delivery = data.delivery

      return true
    } else {
      return false
    }
  }
}
//=========================================================
class Promocode {
  static #list = []

  constructor(name, factor) {
    this.name = name
    this.factor = factor
  }
  static add = (name, factor) => {
    //name - назва промокода factor- множник
    const newPromocode = new Promocode(name, factor)

    Promocode.#list.push(newPromocode)
    return newPromocode
  }

  static getByName = (name) => {
    return this.#list.find((promo) => promo.name === name)
  }

  static calc = (promo, price) => {
    return price * promo.factor
  }
}
Promocode.add(`Summer2023`, 0.9)
Promocode.add(`Winter2023`, 0.5)
Promocode.add(`Lego2023`, 0.7)

//=========================================================

router.get('/', function (req, res) {
  res.render('purchase-index', {
    style: 'purchase-index',

    data: {
      list: Product.getList(),
    },
  })
})
//=========================================================
// router.get('/', function (req, res) {
//   res.render('index', {
//     style: 'index',

//     data: {},
//   })
// })
//=========================================================

router.get('/purchase-product', function (req, res) {
  const id = Number(req.query.id)
  res.render('purchase-product', {
    style: 'purchase-product',

    data: {
      list: Product.getRandomList(id),
      product: Product.getById(id),
    },
  })
})
//=========================================================

router.get('/alert-order', function (req, res) {
  res.render('alert-order', {
    style: 'alert-order',

    data: {
      message: 'Операція успішна',
      info: 'Товар створено',
      link: '/test-path',
    },
  })
})
//=========================================================
router.post('/purchase-create', function (req, res) {
  const id = Number(req.query.id)
  const amount = Number(req.body.amount)

  if (amount < 1) {
    return res.render('alert-order', {
      style: 'alert-order',

      data: {
        message: 'Помилка',
        info: 'Некоректна кількість товару',
        link: `/purchase-product?id=${id}`,
      },
    })
  }

  const product = Product.getById(id)

  if (product.amount < 1) {
    return res.render('alert-order', {
      style: 'alert-order',

      data: {
        message: 'Помилка',
        info: 'Такої кількості товару немає в наявності',
        link: `/purchase-product?id=${id}`,
      },
    })
  }

  console.log(product, amount)

  const productPrice = product.price * amount
  const totalPrice = productPrice + Purchase.DELIVERY_PRICE
  const bonus = Purchase.calcBonusAmount(totalPrice)

  res.render('purchase-create', {
    style: 'purchase-create',

    data: {
      id: product.id,
      cart: [
        {
          text: `${product.title} (${amount} шт)`,
          price: productPrice,
        },
        {
          text: `Доставка`,
          price: Purchase.DELIVERY_PRICE,
        },
      ],
      totalPrice,
      productPrice,
      deliveryPrice: Purchase.DELIVERY_PRICE,
      amount,
      bonus,
    },
  })
})
//=========================================================
router.post('/purchase-submit', function (req, res) {
  const id = Number(req.query.id)

  let {
    totalPrice,
    productPrice,
    deliveryPrice,
    amount,

    firstname,
    lastname,
    email,
    phone,
    comment,

    promocode,
    bonus,
  } = req.body

  const product = Product.getById(id)

  if (!product) {
    return res.render('alert-order', {
      style: 'alert-order',

      data: {
        message: 'Помилка',
        info: 'Товар не знайдено',
        link: '/purchase-list',
      },
    })
  }

  if (product.amount < amount) {
    return res.render('alert-order', {
      style: 'alert-order',

      data: {
        message: 'Помилка',
        info: 'Товара немає в потрібній кількості',
        link: '/purchase-list',
      },
    })
  }

  totalPrice = Number(totalPrice)
  productPrice = Number(productPrice)
  deliveryPrice = Number(deliveryPrice)
  amount = Number(amount)
  bonus = Number(bonus)

  if (
    isNaN(totalPrice) ||
    isNaN(productPrice) ||
    isNaN(deliveryPrice) ||
    isNaN(amount) ||
    isNaN(bonus)
  ) {
    return res.render('alert-order', {
      style: 'alert-order',

      data: {
        message: 'Помилка',
        info: 'Некоректні дані',
        link: '/purchase-list',
      },
    })
  }

  if (!firstname || !lastname || !email || !phone) {
    //обязательные поля, если какого-то поля нет, то будет возвр ошибку
    return res.render('alert-order', {
      style: 'alert-order',

      data: {
        message: 'Заповніть обов`язкові поля',
        info: 'Некоректні дані',
        link: '/purchase-list',
      },
    })
  }

  if (bonus || bonus > 0) {
    const bonusAmount = Purchase.getBonusBalance(email) //отримуємо кількість бонусів у поточному балансі

    console.log(bonusAmount)

    if (bonus > bonusAmount) {
      bonus = bonusAmount //якщо покупець ввів більшу кількість бонусів ніж є, записуємо макс кількість бонусів доступних у покупця
    }
    Purchase.updateBonusBalance(email, totalPrice, bonus) //оновлюємо кількість бонусів

    totalPrice -= bonus //зменшуємо ціну товара на кількість бонусів
  } else {
    Purchase.updateBonusBalance(email, totalPrice, 0)
  }

  if (promocode) {
    promocode = Promocode.getByName(promocode)

    if (promocode) {
      totalPrice = Promocode.calc(promocode, totalPrice)
    }
  }

  if (totalPrice < 0) totalPrice = 0 //якщо загальна сума товара менше 0, залишаємо суму 0

  const purchase = Purchase.add(
    //створення нового замовлення
    {
      totalPrice,
      productPrice,
      deliveryPrice,
      amount,
      bonus,

      firstname,
      lastname,
      email,
      phone,

      promocode,
      comment,
    },
    product,
  )

  console.log(purchase)

  res.render('alert-order', {
    style: 'alert-order',

    data: {
      message: 'Успішно',
      info: 'Замовлення створено',
      link: '/purchase-list',
    },
  })
})
//=========================================================

router.get('/purchase-list', function (req, res) {
  const list = Purchase.getList()
  console.log('purchase-list:', list)

  res.render('purchase-list', {
    style: 'purchase-list',
    data: {
      purchases: {
        list,
      },
    },
  })
})
//=========================================================
router.get('/purchase-info', function (req, res) {
  // res.render генерує нам HTML сторінку
  const id = Number(req.query.id)
  const purchase = Purchase.getById(id)
  const bonus = Purchase.calcBonusAmount(
    purchase.totalPrice,
  )
  console.log('purchase:', purchase, bonus)
  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('purchase-info', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'purchase-info',
    component: ['heading', 'divider', 'button'],

    title: 'Інформація про замовлення',

    data: {
      id: purchase.id,
      firstname: purchase.firstname,
      lastname: purchase.lastname,
      phone: purchase.phone,
      email: purchase.email,
      delivery: purchase.delivery,
      product: purchase.product.title,
      productPrice: purchase.productPrice,
      deliveryPrice: purchase.deliveryPrice,
      totalPrice: purchase.totalPrice,
      bonus: bonus,
    },
  })
  // ↑↑ сюди вводимо JSON дані
})
//=========================================================
//=========================================================
// router.get('/purchase-update', function (req, res) {
//   const id = Number(req.query.id)
//   const purchase = Purchase.getById(id)
//   console.log(id, purchase)

//   res.render('purchase-update', {
//     style: 'purchase-update',
//     data: {
//       id: purchase.id,
//       firstname: purchase.firstname,
//       lastname: purchase.lastname,
//       phone: purchase.phone,
//       email: purchase.email,
//     },
//   })
// })

router.get('/purchase-update', function (req, res) {
  const id = Number(req.query.id)

  const purchase = Purchase.getById(id)

  if (!purchase) {
    // Якщо товар з таким id не знайдено, відображаємо повідомлення про помилку
    res.render('alert-order', {
      style: 'alert-order',
      component: ['button', 'heading'],

      isError: true,
      title: 'Помилка',
      info: 'Замовлення з таким ID не знайдено',
    })
  } else {
    // Якщо товар знайдено, передаємо його дані у шаблон product-edit
    res.render('purchase-update', {
      style: 'purchase-update',
      component: ['heading', 'divider', 'field', 'button'],

      title: 'Зміна данних замовлення',

      data: {
        id: purchase.id,
        firstname: purchase.firstname,
        lastname: purchase.lastname,
        phone: purchase.phone,
        email: purchase.email,
        delivery: purchase.delivery,
      },
    })
  }
})
//=========================================================
router.post('/purchase-update', function (req, res) {
  const id = Number(req.query.id)
  let { firstname, lastname, phone, email, delivery } =
    req.body

  const purchase = Purchase.getById(id)

  console.log(purchase)

  if (purchase) {
    const newPurchase = Purchase.updateById(id, {
      firstname,
      lastname,
      phone,
      email,
      delivery,
    })

    console.log(newPurchase)

    // Якщо оновлення вдалося, відображаємо повідомлення про успіх
    if (newPurchase) {
      res.render('alert-order', {
        style: 'alert-order',
        component: ['button', 'heading'],

        data: {
          link: '/purchase-list',
          title: 'Успішне виконання дії',
          info: 'Товар успішно оновлено',
        },
      })
    } else {
      // Якщо оновлення не вдалося (наприклад, товару з таким id не існує),
      // відображаємо повідомлення про помилку
      res.render('alert-order', {
        style: 'alert-order',
        component: ['button', 'heading'],

        data: {
          link: '/purchase-list',
          title: 'Помилка',
          info: 'Не вдалося оновити товар',
        },
      })
    }
  } else {
    // Якщо оновлення не вдалося (наприклад, товару з таким id не існує),
    // відображаємо повідомлення про помилку
    res.render('alert-order', {
      style: 'alert-order',
      component: ['button', 'heading'],

      data: {
        link: '/purchase-list',
        title: 'Помилка',
        info: 'Не вдалося оновити товар',
      },
    })
  }
})

// ================================================================

module.exports = router
