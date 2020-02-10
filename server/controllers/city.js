const CityModel = require('../database/models/City');
const User = require('../database/models/User')

async function create(req, res) {

    let user = await User.findById(req.body.id)

    req.body = filter(req.body, ['name', 'preferences'])

    let city = await CityModel.create({
        ...req.body,
        user: user
    })

    // city.preferences = req.body.preferences

    await city.save()

    return res.send(city)

}

async function index(req, res) {
    //shows a list of all the cities
    return res.json(await CityModel.find())
}

// city/:id
async function update(req, res) {

    req.body = filter(req.body, ['name', 'preferences'])

    let city = await CityModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})

    return res.send(city)
}

async function destroy() {
    //self explanitory function
    CityModel.findByIdAndRemove(req.params.id)

    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
}

const filter = (object, keys) => {
    return Object.keys(object).reduce((acc, key) => {
        if(keys.includes(key)){
            acc[key] = object[key]
        }
        return acc
    }, {})
}



module.exports = {
    create,
    index,
    destroy,
    update
}