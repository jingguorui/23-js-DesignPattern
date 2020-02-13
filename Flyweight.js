/*
* 享元模式
* */
const Model = function(gender) {
    this.gender = gender
}
Model.prototype.takephoto = function() {
    console.log(`${this.gender}穿着${this.underwear}`)
}
const modelFactory = (function() { // 优化第一点
    const modelGender = {}
    return {
        createModel: function(gender) {
            if (modelGender[gender]) {
                return modelGender[gender]
            }
            return modelGender[gender] = new Model(gender)
        }
    }
}())
const modelManager = (function() {
    const modelObj = {}
    return {
        add: function(gender, i) {
            modelObj[i] = {
                underwear: `第${i}款衣服`
            }
            return modelFactory.createModel(gender)
        },
        copy: function(model, i) { // 优化第二点
            model.underwear = modelObj[i].underwear
        }
    }
}())
for (let i = 1; i < 51; i++) {
    const maleModel = modelManager.add('male', i)
    modelManager.copy(maleModel, i)
    maleModel.takephoto()

}
for (let i = 1; i < 51; i++) {
    const femaleModel = modelManager.add('female', i)
    modelManager.copy(femaleModel, i)
    femaleModel.takephoto()

}