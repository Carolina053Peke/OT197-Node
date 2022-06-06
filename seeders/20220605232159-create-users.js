'use strict';
require('dotenv').config()

const bcrypt = require("bcrypt")
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [
      { firstName: "Frannie", lastName: "Nozzolinii", email: "fnozzolinii0@angelfire.com", password: bcrypt.hashSync("XYrA@140@o93Eeg", +process.env.SALT_ROUNDS), roleId: 1, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHdSURBVDjLpZNraxpBFIb3a0ggISmmNISWXmOboKihxpgUNGWNSpvaS6RpKL3Ry//Mh1wgf6PElaCyzq67O09nVjdVlJbSDy8Lw77PmfecMwZg/I/GDw3DCo8HCkZl/RlgGA0e3Yfv7+DbAfLrW+SXOvLTG+SHV/gPbuMZRnsyIDL/OASziMxkkKkUQTJJsLaGn8/iHz6nd+8mQv87Ahg2H9Th/BxZqxEkEgSrq/iVCvLsDK9awtvfxb2zjD2ARID+lVVlbabTgWYTv1rFL5fBUtHbbeTJCb3EQ3ovCnRC6xAgzJtOE+ztheYIEkqbFaS3vY2zuIj77AmtYYDusPy8/zuvunJkDKXM7tYWTiyGWFjAqeQnAD6+7ueNx/FLpRGAru7mcoj5ebqzszil7DggeF/DX1nBN82rzPqrzbRayIsLhJqMPT2N83Sdy2GApwFqRN7jFPL0tF++process.env.SALT_ROUNDScDd3MTZ2AjNUkGCoyO6y9cRxfQowFUbpufr1ct4ZoHg+Dg067zduTmEbq4yi/UkYidDe+kaTcP4ObJIajksPd/eyx3c+N2rvPbMDPbUFPZSLKzcGjKPrbJaDsu+dQO3msfZzeGY2TCvKGYQhdSYeeJjUt21dIcjXQ7U7Kv599f4j/oF55W4g/2e3b8AAAAASUVORK5CYII=", createdAt: "2021/12/11", updatedAt: "2022/02/13" },
      { firstName: "Steward", lastName: "Leale", email: "sleale1@domainmarket.com", password: bcrypt.hashSync("Av@fO3cjN", +process.env.SALT_ROUNDS), roleId: 1, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHjSURBVDjLdZO/alVBEMZ/5+TemxAbFUUskqAoSOJNp4KC4AsoPoGFIHY+gA+jiJXaKIiChbETtBYLUbSMRf6Aydndmfks9kRjvHdhGVh2fvN9uzONJK7fe7Ai6algA3FZCAmQqEF/dnihpK1v7x7dPw0woF64Izg3Xl5s1n9uIe0lQYUFCtjc+sVuEqHBKfpVAXB1vLzQXFtdYPHkGFUCoahVo1Y/fnie+bkBV27c5R8A0pHxyhKvPn5hY2MHRQAQeyokFGJze4cuZfav3gLNYDTg7Pklzpw4ijtIQYRwFx6BhdjtCk+erU0CCPfg+/o2o3ZI13WUlLGo58YMg+GIY4dmCWkCAAgPzAspJW5ePFPlV3VI4uHbz5S5IQfy/yooHngxzFser30iFcNcuAVGw3A0Ilt91IkAsyCXQg5QO0szHEIrogkiguwN2acCoJhjnZGKYx4Ujz5WOA2YD1BMU+BBSYVUvNpxkXuIuWgbsOxTHrG3UHIFWIhsgXtQQpTizNBS5jXZQkhkcywZqQQlAjdRwiml7wU5xWLaL1AvZa8WIjALzIRZ7YVWDW5CiIj48Z8F2pYLl1ZR0+AuzEX0UX035mxIkLq0dhDw5vXL97fr5O3rfwQHJhPx4uuH57f2AL8BfPrVlrs6xwsAAAAASUVORK5CYII=", createdAt: "2021/+process.env.SALT_ROUNDS/30", updatedAt: "2021/09/18" },
      { firstName: "Jolie", lastName: "Chattock", email: "jchattock2@springer.com", password: bcrypt.hashSync("agxJcbF@z73K8l", +process.env.SALT_ROUNDS), roleId: 2, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ8SURBVDjLpZB/SFNRFMftj5IiW9saIQjGQrBiUagEFWLDydrUhAWzNNuWTZ1oKIUzf4RlzZY6sWyrLZXhfFszQ1eac2SQkYWW0yH0l1AWITSw1IXK+/beK0RBptCFD+fcyz2fc+4NARDyP6x5qInbVVEn5sw2SHdCL2ahQsiey4jhVW9IkBPDKbmfyibN6Rw8oLgrY0MnYaEofgcpPcitWldglLLQQhXqqSKdlIaNm8k8XDnBQWYMa2ZdgS5+O14YyzHVq8eQpQiFCTwUJ4YjX8SH+hh7wapNCQ0qMGdF/gh8/4SZN0Z87a+H13ENk89vwz85AiJ378xYq2ZLUEFjxv5B//t2TA87MT9KUNiZ3D9C4KFKMBz0Cbults1RxzVWoiAWv4ctCPieMsx/tKHzciwE8blPeCLz1jUFPAkRyhW35UWIPfB9noWjLBX2shQGOn898QsRSS/BET66xBWatq0ScE86NoUlORSRyYOYmJpH2xRQ7APy3gEXXgHnewCtsxPFRgXU9acgvyEMiEsOVS4LDsia0xJP6+EcWoLJCxS8JZE7QCK7j0RWFwmlmUCVU4lnviaMfnPD0K+B3CDAkfzwWkbwoTx6adqlxb1mFxS9VFeqo7KbxLkOEmdsVKyRoGu8AV0TjaBXreciDJ4cWhBgBN6KfaTffR3p6hZU988howM4aycht5KQWUgklx1Gj8+Clat7rIkW/P2IcWtB6Uhp1KJSeWsxTjEAJTW6agVHC/m441ZB51Ywxbo+xeoJaCbteWGVV6u5e9JcpsiE1i980eM5flLHAj/RuSCQZy7KaqNR585mOtOR3i//wUagLtdQ/KTH/hdr6PM/RhGjA91Gi1AAAAAASUVORK5CYII=", createdAt: "2021/08/09", updatedAt: "2021/+process.env.SALT_ROUNDS/18" },
      { firstName: "Yance", lastName: "Gelly", email: "ygelly3@washingtonpost.com", password: bcrypt.hashSync("SQ@3o3ALN", +process.env.SALT_ROUNDS), roleId: 2, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGeSURBVDjLxVNNS0JRED3qA0MRoqCFouBGN9Yia9HGRa3b9x/6M62jf9CuTS0EV0arXASG0gcUYWIgmvi6792P7sz1WUI7Fw0Mc70z59wz88aYMQbLWBxL2tIEXrN5+mcPWkvrBsZQVNYDSKmglLTZ0J4lwjCER8XZ7OYcSDMxRs/cEdCZSKKoNeUU7u/rjoBMiE8GuKQrcCA1A0XuFK2sZKwC3xE4Zo1UahX5/Dam0yH6/Q4KhV17H+Lu7gKVyiESCQ/dbgPD4QvfSykQlzKcMxP4+fnGJr4seAdPT01MJh8oFve4uNOp20fWQBilQqvAEtBQqE+6IBuPe3h8bML3hyiX95FOr6HXayOT2UCpdIDR6I1r6VF6KK61z5N1ROAkvdBuX+H6+oznksttodE4wevrLbdC8h1GwCMZJF+pgIdSrR6xtCCYWLnrnBuP31GrHfN5MHhgcDRUj3pzbAFarfOFSUf++4tEA3dRwhNCsKRkMv2r+Oe7R7+jvbArNotu/6wC3/Z7yX3TdhkjbDS8eUTi5EoGuLhosX//N34Dm6aVPfzbYjIAAAAASUVORK5CYII=", createdAt: "2021/+process.env.SALT_ROUNDS/26", updatedAt: "2022/04/30" },
      { firstName: "Oriana", lastName: "Staynes", email: "ostaynes4@redcross.org", password: bcrypt.hashSync("eI0DvVX@tN3LPG", +process.env.SALT_ROUNDS), roleId: 1, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAEwSURBVDjLpZMxSkNBFEXPD2IhVmKlS8gGXIBdsHQRkt5dWGYfFmYXtsHaQkTQRlDIzHv3WsyPIfiDSh4MU8zlzJ375nW22aX2fhPc3D1v3JA21xcn3Z8BAKdH+9hgm8fXMuzg9v7TBpRgwIbLs4MOQDYSWCarhgEpOD4cIcCCl/cmzDRKkEzKlNgCsCHddhlWugiRaVIiE+oyhwGRNJs9IHtdTTeITOZPByOA6XRq9Q5C6zWZTFyLqSFqiAhRqhiPx94AzGazbuWgLaMU8/m8KyWJFFlFDVOLWCwWP9sYakHKbhn0Tyghovr7CXVbiJki1a0z6E3WZbMvNU0t3hKi4ektyb4jqx9eQkQay62V3gK4Oj/shn5hrUmGkVcQ/W8WIszD4weyBs+7XadxxI71BUieEw+8ru7iAAAAAElFTkSuQmCC", createdAt: "2021/07/09", updatedAt: "2022/04/16" },
      { firstName: "Pat", lastName: "Goman", email: "pgoman5@ning.com", password: bcrypt.hashSync("equG@eg341B", +process.env.SALT_ROUNDS), roleId: 2, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALCSURBVDjLjZP/SxNxGMf9B/QfiVB/ytCaoS7MDEoMYlgswi+FkzQsjNZQNKX1g0s3ZkTppuB+smJSOnOiGTa1lLHt5rZ0c05trX29fblt7+5zdJIK0cHD57mHz+t1z3P3uRwAOX/H4uJisdFoHJienl7V6/U/JiYmful0Okqr1apGNarSo/sPEpPJlMvCShZOud1uBAIBhMNhxGIxhEIhWK0WqAa7GbWySzOg6M07JPgDv3c6nchms4jH4yCSra0t+P1+pNNpZNM0GJqC0TCGp33353ufPMo7EJAnEziVSoFcDMOA3DscDgSDQU6apHeQiFqQSWxgavI1Oh83azgBCxexbWei0SgHRCIRTuL1emGz2UDq6TSDWMiGZNTKdZFio/VuY+Ze253iHBZWejwekKAoioPIzETk8/m4PJkIsQIzC7rZ/CfbYRLz8/NoaGhQ5hQUFOB/orCwAL6FZ/BONcG3rIHL5YJYLP7GCcxmM+x2OxYWFjAyMsIBZN3e3ubqJO8QnYR/qQVMZAm+GTE2l99AJBL5OQHZxENEQoLU+Lp9dhB7xjowQQ2CZhn8n6Vwjl5Fe11Z5JiABA/zdce7ZiQD40jsSJHYHUJwTQraLcP6QGnm2Ai8iKz8CLMvGxF19oHevI24uw309xug7bVYkp5O/fMlXqnIh6H/HFbHLiJMXQe9cQlxpwgxG4Hz0VNzQsodJIVCoZybm8NukP2U3nVYtr7C8mkAdl0t26oaMUcNaEqIlednsSYXwtQtQMvlU4aDkyiXy3O7ejoN42+1cO1bOYlLL2ZnHkZ4vQi05TxWVGwnk8N4NaRClbDso0AgyD30M8lkstwHD9tfNEnqmYkPOjgnbyK514MYVY3lwVIM97ei8kJlqry8XMnDhwR8SCTNJfVNt9RDHRX7X9TC7ExPSUZy7YynqrpSzcLFR/f/BmKF4lxymSkBAAAAAElFTkSuQmCC", createdAt: "2022/05/15", updatedAt: "2021/11/18" },
      { firstName: "Ronnica", lastName: "Willowby", email: "rwillowby6@freewebs.com", password: bcrypt.hashSync("JAwfYL@kT3rjC", +process.env.SALT_ROUNDS), roleId: 1, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKgSURBVDjLlZLrS1NxGMd90ZvovdEfEBEUEhZIb0xMjdyLIuyGkiHGUFKydFKKJiRegjIyFJRwojMxzfJSaVOYeTfxtpSNuZ1tXnY2z27nsss5334uWloG9uLD7/A7z/fzPPx4IgBE7ISl3qWyelUvu9JIueZqeOdUmcCMFDgcQ3fntjSK0j/rwx+csesIZ3jbL1j6EbCPIej5DpE3QRIoBJ3LEFb74BjIxkbXVYNdrTixS8Ca3h/y6pSTfloD0UcRjCS8BJGbRdA7QRgjd1pIfhruyeewKOMdm+rCw2GBV1tXKZh7SIEVoqAjpwVS0AlIvhBSkCGyeQRcPYDogO1DNixvrveFBa6ZCkuAmSe1OtJpFVLATkJboWCIAE3+GYngI6ENgnUK+hcxfFiw9fWRT+RWEWTHEeRmyPhaMvYCgu5ZEpgkbzCCgPszBNsr8NY8iF4Ky5WnpLDArs41+zYnSPdF8OYi0qEcTHc6mF45mJ4M2Ftl4C1lYPU34KerwFNTWKmO/j2BfbiwghmvJuPawZsUsNVHgTPlEx6ANcjJeR9r5QfhWUqEJOlhbc+FoV42FBY4R0sPbPbKlz2LLeQB9aCbYkJhzpIFlkoDZ8zDRk0kRHYYrm8d0JYeEyyduUd37QH9pTBqvSOV9iy0wtmZ+VNAOm+HOeM92JtlYDQN0JYcD1BtmTf/WqRtbJ/yTxtUt9fXGhPBq5MhriVBtMYhoLkMQ1Ek5sqi3eb2O4l7buIvhlRPkmsfZ/ibax+iruosnpacQUFOOq7Fn5TUypJz/1zlnRQr5JSypRVKZRvq6htR/ewlriTH03vV7ilQ5NwaHRgchM1GY3p6Bq+bmpEii9XtWzCgqkhLuXSBTUg4L8XFxUoXk2K57obirH0L/ocfNQ8V8wE+uE0AAAAASUVORK5CYII=", createdAt: "2021/+process.env.SALT_ROUNDS/23", updatedAt: "2021/08/18" },
      { firstName: "Carr", lastName: "Dauncey", email: "cdauncey7@tinypic.com", password: bcrypt.hashSync("FgjSe@EH3GSr", +process.env.SALT_ROUNDS), roleId: 2, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADCSURBVCjPvdCxDYMwEAXQkyhoEBGKIipcRHTuXFk0riwhGgoke4JMwARMkA2Y4G+QCdggE9waxAKHkhJd+Z++z0crnQ9dAtzk4DD4lTpvYaAnJeVcQ7RHg+MBuzdQrCq51JP4PLioIhi4j0DjydLXISibG2dNBD13ix3NqEe1SN5pgeyb5hF0bGODRL2B4p0hlccOlk0EYTXe4tdKSU7/HQzrCATuXDShHAlooXYDZtJQkOGbwpcIb89bDJqvO/X5/ABgCuuOdgJr8AAAAABJRU5ErkJggg==", createdAt: "2022/05/04", updatedAt: "2022/02/15" },
      { firstName: "Romeo", lastName: "Gaule", email: "rgaule8@simplemachines.org", password: bcrypt.hashSync("v@y73BwZ", +process.env.SALT_ROUNDS), roleId: 1, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALZSURBVBgZBcFLaJxVHMbh3znfmVsmmaRJehlQUqE1EQu1xKAuxForgmahFhXsxoXgokZwISKIIEJ3guii3bkQstCFuHAhrWBttRZsiaIlaFNtICbmOqbNfDPznfN/fR4nCYAn3/v+lVqjctI7JoEq4ABwgBzIiGYLrQ1967a33rp4ZroH4CQB8PTpHy5+NjN5n/duSJAhAACQAMTanYLZn1usLHbb13+bH750ZrobAAB85sbLIRv6fZXMOwcOZJBkxCjyInH04AAP3Ru4Ymt9somtx17/elcAADg0utDoLZzNxoqIkrBkKCUsFkSrszhyGqjRbJSZnmpyrrxSu7lc/zQAbMwdyyb3TIVKfS99pd2oiKiIpF5OvjXP8uCLWGU3y5s5Y/0ZlVJg/yMjXPjp7xc8gJLd/fDotaxUG8N2ruN8HUuRTusP1hsv0x1+hnIWuLHhuLIY+e7PNpVShgs+hvWrR8tK9urgyDiQYfkKhC5bi+fo7JvB9jxPKIQyD2Xw5jDLEB6cJ1hKRxTttcrAQRRzyJpQFJgFXHuR8l8fUSpyCgZo730WV24iLwyQICjaJ9WRB0fzjXksGuW+A2CB4ebj5Bu/kIoe2//MoYkPCNVdCIdwJINk4C2mz3eWLn/4xdVG7PoDrN/4htjdoei06LXX+c/dQ3z0PIy9hMvqBO/IvKNacqQonCQAnnj/x3x2ZqLavnCcav9+brdWKcbeQHedwATJwIBkQg4ONz3H373UCQAAFkU+9yalyjCXN5t8WT9LvjYI/0bkBIAEBgDM7itRdI0AAHB/fc6n7Vt8VXuHoQee4pggCZIDEwiQQIJfVyMyUXQiAQBg7c6g+cMfa/7WIaelhDkhHAAmcAgTyDu8OUJwFpPFAACwsNlc7h8ZH3270atL8ggMABisBQAkqJUczmGlzN1O0ZacJACmTp0/FQs955w7ItQHAIBAgBAACICOmV3zMPs/Y958nDUklyMAAAAASUVORK5CYII=", createdAt: "2021/07/29", updatedAt: "2021/12/28" },
      { firstName: "Terencio", lastName: "Perel", email: "tperel9@ihg.com", password: bcrypt.hashSync("pFTyk@nW3OFm", +process.env.SALT_ROUNDS), roleId: 2, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAInSURBVDjLnZPPS1RRFMe/b3zk5DCVmlq+0ZBCoTEXWkEELmzhqiCocNWyTav+gfoX2gq2bhET/VgUIczKoVUGxthIKqX1tAmG+cGM7/56nXvezDCtDC9czpl7z+ec7zlznxOGIY6y5p/N3ZVKLcb+J/j+23uphczt6x3wLYKfe0Nne53DFBB8QQiZFkK8FFLNSynjBL86MzDY9X13t3qoAoJ7Cc6kBrwYwR8Ifn3OSzFM19POYu4xSzAmpG2gaRutQYFQStOW+H1Qhh9WcTKZRK1exy9/D+nEEI4hBjdtPAwPX2pXtC2FoWlu6yv2Pxe/YulLBk7o4MnVBzgdP4H19WW4LTAIqgxYFRGsyddtez7ej0cX71AFg+NaQWsJKRtRAgtYsKfnFEZGplGvl7C/X8Do6BU6l1hbe4PJyZuY6nKxsZFFqfSDz5UKELM92grGKIa3tz/SxQHBl7G1tYJa7Q/Gxq5xcKGwTEX6eC6RAkqgteI+7YFdlYqPzc0VNBolTEzMIZHog+/nkUwOYnz8Bsrlnxxri9pCMWMa0NyTTQS+tBXy+ffI5ZZ4Lp43hWz2KXZ2PnErVn7EBHCtDCtfa8FDmZlZYGlC1EhuP99VKnuYnX3IfrH4jeGobQ3X9hZlE1hdfdGeRyug85+wtjXwyCq4QRCwpO7uREewafqm/bv1LujJNW30CZCCBvX7jvtWys4hIGvfg+AkkVzFQGT/Xc5RP+fW+gsEgchGXj0/PQAAAABJRU5ErkJggg==", createdAt: "2022/02/24", updatedAt: "2022/03/22" },
      { firstName: "Joyann", lastName: "Stoggles", email: "jstogglesa@flavors.me", password: bcrypt.hashSync("dCp@MC3wg1", +process.env.SALT_ROUNDS), roleId: 2, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHoSURBVDjLpVM9awJBEB2DKIoocoI2goXVgVhoYam9bep0XqX+DU1pZ6EhpZ2FYGsnot2BqJUgaiGCd/j9tZlZvc2ZjyZZGPZmb+bNe49dC2MM/rOsXw9Go1EcQdMYSYwIDbheryruLdwb0Wi0Z663mBlgs4J5TpIk2el0gt1u5+f7/R7W6zXMZrM+gpRisVhZNBEAxXA4VAaDgYbFjBbtuq4zTdPYbrfjZ5vNhnU6Ha3dbitGH2dwp/0eCoVkmrparQSweYjP54PtdgvdbpeYvKRSqd4TFWCSJtpGc6FQgEqlKpqLxVeoVt8AGQFJCwaDMrJJCxPJMPpBWhEMboPZ/ZvxbwMMG8Hr9VJtks4MBhGafjgcHigbAIRhnBGAy+WC8/kcEQBmrdR0+3402VxzPB7hdDqBmYFK5thstjsAExI+81szSV0ulwSgCoDL5dIigxwOBy+SJN+DBHLfYEE+process.env.SALT_ROUNDS+mUJLSEiai9MR6Pn1Gb7Pf7QVEy4p7QBcpkbrnb7Yb5fA6qqvYxbQgGiUSih66W8JLoRM/j8YDVauWm0k5BzXgTodls6uhBCUF7365yvV5XUFsuHA7LgUCAA6E8WCwWMJlM+GTMS/l8vvzjW6BVq9XiSDuNQPwxoVZuMkYLmTSy2ezvj+kv6wM24KX3CYk6PAAAAABJRU5ErkJggg==", createdAt: "2022/04/07", updatedAt: "2021/11/14" },
      { firstName: "Waldemar", lastName: "Bridel", email: "wbridelb@deliciousdays.com", password: bcrypt.hashSync("YlcKp@at3C97", +process.env.SALT_ROUNDS), roleId: 2, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADZSURBVBgZBcFBbo1hGAbQ83+5kRCJhA2IEQMrYAPMxRZMbcLG2ICRGTeUtE1jpr1p3/95nLMV8PnL3eOT07Pr79f+/f34GuAAcPfqgXseunlx6ysADsfC0+3k1n03ODP41oiX2+IReO7KH7sfLr1HPBEsCOKNc0cXPghGDFZUUPHWb+/UIKpYUUXU+LRFBbsYLCqICkbsiArWroKIQVQQFayIYFRQFYwKVtQgqhgxiNixooJdDKIgCtaIHVFB1KAqWFFBVDCiiAoOuzMwfgnqpyCOYCsAAADgP4mZnXDW2crZAAAAAElFTkSuQmCC", createdAt: "2022/01/27", updatedAt: "2021/07/19" },
      { firstName: "Walliw", lastName: "Jerrom", email: "wjerromc@ucsd.edu", password: bcrypt.hashSync("mBgv@Jm32BZ", +process.env.SALT_ROUNDS), roleId: 1, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADHSURBVCjPdZFNbsIwFAa/5B5FuQPCOQ9HQuqCq3SHUAtrrgFCSKQk8Y80XTjYJqiajRfj55GftNBKJtGoRiXSytlAZORzM1ckExjouHEm0LPdqHkTRnruXAgEPGpVq1JVCJ6RB3dOfHFEa7W5RzLx3kjPDse8ZxKisue9JwkByzevPQGZQnD8kHuunEvB43EcyD0dt/kEzzGdLD2/k9Ckb261zs9ZhiggVRO12jzN4Z5C+tQq90T+ETK20/J1tU2xeCOjpT7+APfbTaDnTb/mAAAAAElFTkSuQmCC", createdAt: "2021/08/14", updatedAt: "2021/07/25" },
      { firstName: "Tansy", lastName: "Marchenko", email: "tmarchenkod@jimdo.com", password: bcrypt.hashSync("viS35@In37gk", +process.env.SALT_ROUNDS), roleId: 1, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGeSURBVDjLxdO9SwJhHAdwIdpqrKmxNZqKuEUhSIyixCI0yjPv1PM1z8KDEonrOPF8OzcVhYoCh2gXp/wzcnmGgiDX1m+PQsZR9EJEw5fnWX6f5/e8mQCYfhPTnwHZbMapKPL9jwFNy47QYllVlWdZPsGXQKGQZwqF3CC5nMbQ4rt6vYabm2uk08fvAOLfHzcA+byGclmHrhdRKhVxcXGGZrOJ8/MzSMlDA0B8MZ7sBqYMgKZl0Oncot1uo9VqodFoQJZlCuoQ49EhQLgo98SHQDZYiaw4J4YA3Suuri6hqioURUEqlYIoinR+ikhEGACP664ucfGLj04PyPKWoStT/6BqtQp4nofb7YbD4YDNZoMg+Gl8r0CP2HcW6QhiWTMCR0cSqtUKJCmJWCwKu30dZrOZYjvw+71vW7BuCr3VTZB5q0hmLWND4OAgjkQiRotDg5bDYWGAeDxu2pXHeIhzS0EyY540dBDfDzOhYIAJBDjG59tjeJ7t9qFkUgTHse+vcXph9NOHRFcd4bysQvP8EfDtp0yhbZqH//tM380L5ZG0STFOrDMAAAAASUVORK5CYII=", createdAt: "2021/06/23", updatedAt: "2021/07/02" },
      { firstName: "Simonette", lastName: "Godbold", email: "sgodbolde@cyberchimps.com", password: bcrypt.hashSync("DR@ME3Tx9", +process.env.SALT_ROUNDS), roleId: 1, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKuSURBVDjLdZLdS1NxGMdPRZLgPxBC0pVhWHgRXhiMdlEUQUXBLhLUMnux0gxUtBeX8yXzuCVbKS5Htunmppt7cW5OXGeerZZhObVA8DIaBtoLljr89pwjWm32gy8/Dvyez/N5Hg4DgPknvC6dwoLTjuNlWwwj6hh8qnF4m1g4FOnx7+OLy6hwCW8swKQTiLjX79dGINAOWKuX0F9elgjgdUkY63Rj3AS8twFcB+BhQV0BZy1gvwu4FMBoK+CoAbouutGRm/QHwGlVeEvFAsCnilGhlHSTNzuZy5KhL5biRVEMNoIZSwH1GXYd4G/LhP9JDOFeKmZjsNelwSFPIV0F6QZhLAmi+6oCuoIUaM+n4em5GPoqAeWxGFhpBoORVhX4LtJTC7pS2O6kwlo5h6FGwFIOmG/RXQF0yOagPp2KxyekBKExCoGmHJYh3Y8Im9Zns1Ylk24tXPUR0jXgWZ4E7TIJ6RpguB6B6mgFWo7sQsPhVfTSGPKsaYZ0lxGmLfdTN2PJ9hnOefOD3+4IhUJfeZ4Hx3Hw+/0IDvV/HnUPsKjP3kaFC+i9Ddzfv8iQ7jKCzwFDsbDdpHCIH1tZWcFWcbsHh3Hv4A7IDyyKo9VkfGdou7PoqwLpLpHuzjA38kt4rLDN/ZPBVxaUaXLXilpOoUAhWet+cEgATDPxf1YgEMAGgJv9IabOrIPcXADnlAbvPnmhHL4GmTIT2cW7mxMAwrwbgE7+i5i8h8cxEFFhYIZ+JDrNvktQ+i4LgJ8JAJ/PJwKi0ehmTlZnYXBKi7+PfVIjAJAA8Hg8ImB+fh4TExNiJKV78ch7AQ3efLG4wZP/fwOXy7UQv32NrR5nm/eB9RaKnYVb+N5yB3a7XW+1WqMWiwUmkwk9PT3Q6/W4opAt59zYsypoU75RGoX3vwEsUe6Qo5mAvAAAAABJRU5ErkJggg==", createdAt: "2021/11/14", updatedAt: "2022/01/02" },
      { firstName: "Iago", lastName: "Guwer", email: "iguwerf@blog.com", password: bcrypt.hashSync("3WLh@Il3LVZ", +process.env.SALT_ROUNDS), roleId: 2, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGkSURBVDjLpZM/T8JAGMZf/gRU0lgU1EZDok5KSIwOfgKJhsGlgyaOfAE/Abo7dNfQ1W9AmNk0kjYO6ISLk4tBDJb27nzfKyWNFhLjJZeXlnue5/feXWNCCPjPSEa9bLfbpud5Z67rJrECVjmHwyHVW13XTyMNbNueR8GNqqp6Oj0HDoqAc5CMSJrNqtBsNk7w6beBZVmHJM7lcquZTAa6L69A6ZwL4IKjkQCGZo7jRLeAixuFQkH+Hgy+wEXxo/2ABnw8D8pHso1IA+oxlUpBr9fzkxmD7eKOTBejdNrwiQTkzFBEi+hgCN227rEymU7/aZXj6QT+Xgm5mAyKpV2ZHlCIiD2IhwkCA2lCyczv/U3pQv3dAB5aF9nCWDwSBun152v4/PDk80QDQgtuJYn4CJnju/PFC+ALRMfHrUYS0CkkEgk/mXEpIAOfxN/cnwTxEMFdq9WCfr8PiqLAzGwab2BMGjHh0xDhRIJqtbpvGEal0+lcapq2t76xCUv5NSkIWltZzss7Eh6xqK+xVquVUXiFsxR8TFRp4hE/maa5NdXgL+Mbb/xsAcKofWEAAAAASUVORK5CYII=", createdAt: "2022/05/20", updatedAt: "2022/02/+process.env.SALT_ROUNDS" },
      { firstName: "Emmeline", lastName: "Issard", email: "eissardg@pagesperso-orange.fr", password: bcrypt.hashSync("RHMxKl@9P32MQ", +process.env.SALT_ROUNDS), roleId: 2, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJRSURBVBgZBcExiJZlHADw3/O+732enKYdQVeklWBeoSBFtmgNNrRcQ9DSFBQZDU4OEYSNbQUtCg5FEAUpDdXSUliBQRBEBBXeVuFZnvKd1/e9z/P/9/uVzATnX37wEfwCAICbpy6s7wUAACjnXnrgUbyFtV3Ld3vhjbO2rv8Alu465sOzr9veugUf4dKpC+sXAWDApWdeObNv+Z57/fPV+zJTm22BzHTiyD5LR0/KzLXPzr/3LC4CwID7l1fus/n7FTHetv7JO2QiXc8fpbTx83eWV4/tBgCAAbLORR11+w+LVmWmj9tpLUMEcPO3LeX401599/O8MVv59c/1vx67fG5te4Boo6ijGGfa7D+kNoQ3n1u1MQ0FkWlsYeiP+ODK5sN96a8++doXBweIOhOtkqEUMum7zo3b6Y+N1HVprOHWdvXUQzsdP7TX0qRb+TbbTx1EnYs618a5qE3UBvrC4sCkLyZ9sTjpXNvcduhOXnxijzrmgQFinMlxLmuIsZGpLaZSWOjJJPticehc/TdN/555fP8OC0NngKhzUZsYm6hBpMhUFH3XASVFJDt6pSv6vpcYIMcm503UJmojgABFEfrCZOiUTBFFKUUmA9SxamMTrYmxkURLBUNHVzqR9IUuMGHnQGYaIOdVjE22JmvISNCiYgAAAJGVKAZc3p5OT+zatyprE7WRicGsTrEXAADM6lSJrgx4++svP92NowBw7fDzFroD9iyOMulKUQpQ0Hd3iKzzkpkAAODkme+/6btykG6F3KIgQVFKZJvuWVrY+T+vNUkTODP9hQAAAABJRU5ErkJggg==", createdAt: "2021/11/16", updatedAt: "2021/+process.env.SALT_ROUNDS/23" },
      { firstName: "Gaston", lastName: "Eddie", email: "geddieh@mashable.com", password: bcrypt.hashSync("9SF@x03yyN", +process.env.SALT_ROUNDS), roleId: 1, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGASURBVDjLxVO7agJRED3XN4gPkEWwET/AysoqoE3+wcIPCEvEVsgnhJXgF4j+QraJLFjkAyxEsFCwsBYU32bPyF7WkEDAIsMOcxnmzJx5rLpcLrhHArhTQt5jMpl8nE6niqs4Ho84HA5a9/u91t1uRzuo1+tV4hRbcMEPkUjEMQxDgr6Lv81wOAzHcTCfz6umaQ6EgVvxJZ1OY7lcIhqNapAfyPdisUAymUShUGDRluseqNFoJNUzmQxWq9UNXbZCoFIKwWBQqicSCcTjcdi2jel0Wg2weiqVkl4ZFIvFpAoTZrNZ0W63i+FwiF6vh/P5jO12i2KxyHm0Qqy0Xq+Rz+d/nXS73Uaj0YBlWdo3m82EJRNUPOfz26fQhdDmiOXD61MZm83mJilZExviWtgrrvEu8ArWFj8fmrdiScDdUyyz/OcD4ix0Ag5sPB7r1VEZ4K2x0+mgVCqh2WyiVquJP5fLCXPV7/ff3V4efVemraf+qySIjKluIlv9+890d4IvgMkS1vrQFCsAAAAASUVORK5CYII=", createdAt: "2022/01/01", updatedAt: "2022/02/21" },
      { firstName: "Allys", lastName: "Wanderschek", email: "awanderscheki@cbsnews.com", password: bcrypt.hashSync("6ppi@oF3IKj", +process.env.SALT_ROUNDS), roleId: 2, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALKSURBVDjLbVJNSFRRFP7em+f8ZTKJOswkNTZOmpFKBaWEFDVBFC7KRdCqgiKccBFJKxe6CWwXtWhRtNCihQURRAUliEJYTeoMzOQk05D9jGTjOH/v73bum9Tp58Lh3Xfu+b57vu8egTGG0jU8PFyu6/plTdPaKCopQPGDYkJV1cGenp7l0nqhlGBoaKiVwCNut7uuoqICoiiC/pHP55FMJjFHi4iO9/b2Bv8hIHA5Hb7zer31siwjkUggk8nw2yFJEpxOp1EXDodnKdfc19eX4//iChMlL7hcrnpFURCNRj+m02kP7c08+D4SicxzYuqunqQEVnDSyoaSbXa7HbFYDAQ6FggE4iVS4wMDA4fi8XjY4/EYtf8jqOaa6Ta+n8Nfi+d4d7yGuq3+w4NPY2fYRKwB31I2Q3Pn9kmYmAKmqWBqMRRFw93gTsNUp3URRzdOouHcW6HYAZF0nTgAgSwRTDb6HgF0gfqz8kMySIGmptHvz1BeMSCz98fXJPCbeKG68ACSpQqCUE6FZYDNQWkdyKagLX2AnPsMXc3CVhcAkwslBNQidH6TjJ+hN6RzHRxN7Ug8HSR8DTZ1+PFkMobx5TIsEU4ZHURLTkTTGoFiyGDUqqNhK0RzFbmjQytomF6wYSocw7Tdgf27dqO20oeXoUeYmPmCewH3NWMOGLnLmGZoXZwJUhevaUJU6HkdhVwBD6ciaG1sgSZqaHH5oQkK9u5o59DuVQKulZEEh88DR6OPCGRsOXUeXd2H8T2VRBn50rntoqH70sFb8NY08621KEGRyQOdDOIehGCyr6cjMlIyU16l2VhAaH4c7+fHcMV/B1efnYbVZOHQ/CoBl2CpPQvbZhMEs6X4hCK9hK7h5NcNeDH1HO3N+/B4+ibM9PpjwVEOvWEMUvT2HsaNNLwwBkf5HerqdyRrwitZQp4JsNKTdwhZ9F9PCb8A2smdT0Nb9SIAAAAASUVORK5CYII=", createdAt: "2021/09/26", updatedAt: "2021/07/09" },
      { firstName: "Karin", lastName: "Geibel", email: "kgeibelj@parallels.com", password: bcrypt.hashSync("HQ@BB3IsM", +process.env.SALT_ROUNDS), roleId: 1, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJiSURBVDjLpZNLbxJRFMf7AfwEfA5YunTDwsTuujO+YsLGxEVTV066cdGYQmaAKKZNawOVSE2qltRIW+kI0jQWOlCGh0Bb6FAYcBgYGKAc51wegrrzJv9k5ub8f+dx750CgKlx3bCBTpNBk1HTzEDGwZ7uz/hx4zVN+icbksnz9YwJHiXZ4+iJGOFi4v5hnH2zl2Fm3RUTxmDsBGBgvu7yF6jISZoXyhLIShs6Vz2iWkOFfLECgUOOX9pOUxg7hAwBejRz8R9ys9UBXIrahYrcBlFTvdUle7Kiwn4oLDu2EgjREwD2hWVj5qE5X2lBodoCoaoS4fdGsDiCbO8E+EdrArajQ4DBw54yWDYuzDg9vwcPbNEJ8z2Gg7Nyk8TEMxdAu4MMehFgDHxPsNgzllquIWCXALCSt5r5JnVAALlSE6RGBy6rCiyvv2fRi4CZ8HFUxGGhuSSpME3twn0rB8xWjnyjEJApKqQKtXMFa851Eb0EcBThCADNqFtPfcRg9Z5OANKCMqiiDcsrr0cA45eDGFuVW1BTOlD8iYDPxJC9VPotDQCpiwY5meR5FWiHc9SCwelLMbl8GXo9IIPD4Dt0PyMKq8K9RL4B7W4Pdr7FgLJ/HA1R99hVMvn8IV6UmiRgeHzJQoMIjfiPCVJadsuLVf6uPdk/xuFFot9FqM1Pflmo1Elgtd4h/WIbeLQITp5XwOxwyXP01u+LNH6VF5whatW9yQfDKcgJEpkJ9hzLiuD1R2CBXuJnLR/+vsrjj+nhq6xp/qWXeW5bYWmrXVy0MOIzs4OdM3uY20z834/pf57zL6w/CRKnLd7XAAAAAElFTkSuQmCC", createdAt: "2022/01/23", updatedAt: "2022/01/+process.env.SALT_ROUNDS" }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
