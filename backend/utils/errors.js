module.exports = {
    raise: function (tag){
        var error = JSON.parse(JSON.stringify(this.get(tag)));
        return error
    },
    get: function(tag){
        var errors = {
            TRANSACTION_NOT_FOUND: {
                status: 404,
                errors:[{
                    code: -1,
                    message: "Data Not Found"
                }]
            }

        }

        return errors[tag]
    }

}