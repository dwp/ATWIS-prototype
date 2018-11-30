const faker = require('faker')
const moment = require('moment')

module.exports = (router, version) => {
  router.use((req, res, next) => {
    res.locals.name = req.query.n
    res.locals.unallocated = req.query.ua
    next()
  })

  router.get(`/${version}/your-cases`, (req, res) => {
    let showNotice = req.session.showNotice
    req.session.showNotice = false

    res.render(`${version}/your-cases`, {
      cases: req.session.data['your-cases'],
      yourCases: true,
      showNotice: showNotice
    })
  })

  router.post(`/${version}/your-cases/`, (req, res) => {
    req.session.showNotice = req.session.data['your-cases'].length >= 5

    if (!req.session.showNotice) {
      let requested = {
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        type: Math.random() > 0.5 ? 'New application' : 'Renewal',
        date: moment().format('D MMMM Y - HH:mm')
      }
      requested.specialism = requested.type === 'Renewal' ? '' : 'Pan Disability';
      req.session.data['your-cases'].push(requested);
    }
    res.redirect('your-cases')
  })

  router.get(`/${version}/case`, (req, res) => {
    res.render(`${version}/case`, {
      specialisms: req.session.data.specialisms,
      advisers: req.session.data.advisers
    })
  })

  router.post(`/${version}/mark-as-complete`, (req, res) => {
    if (!req.body.copied) {
      res.render(`${version}/mark-as-complete`, {
        error: true
      })
      return
    }

    if (req.body.copied === 'yes') {
      req.session.data['your-cases'].map((c, i, a) => {
        if (c.name === req.query.n) {
          a.splice(i, 1)
        }
      })
      
      res.redirect('your-cases')
    } else {
      res.redirect(`case?n=${req.query.n}#application`)
    }
  })

  router.post(`/${version}/renewal-complete`, (req, res) => {
    if (!req.body.renew) {
      res.render(`${version}/renewal-complete`, {
        error: true
      })
      return
    }

    if (req.body.renew === 'yes') {
      req.session.data['your-cases'].map((c, i, a) => {
        if (c.name === req.query.n) {
          a.splice(i, 1)
        }
      })
      
      res.redirect('your-cases')
    } else {
      res.redirect(`renew?n=${req.query.n}`)
    }
  })

  router.get(`/${version}/unallocated`, (req, res) => {
    res.render(`${version}/unallocated`, {
      cases: req.session.data['unallocated-cases'],
      Unallocated: true
    })
  })

  router.get(`/${version}/search`, (req, res) => {
    res.render(`${version}/search`, {
      Search: true,
      cases: req.session.data['unallocated-cases'].filter(c => {
        if (req.session.data.q) return c.name.toLowerCase().indexOf(req.session.data.q.toLowerCase()) > -1
      })
    })
  })

  router.get(`/${version}/renew`, (req, res) => {
    res.render(`${version}/renew`, {
      specialisms: req.session.data.specialisms,
      advisers: req.session.data.advisers
    })
  })
}
