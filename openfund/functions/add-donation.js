const { query } = require('./util/hasura');

exports.handler = async (event) => {
    const { id, initiative_id, email, donation, time } = event.body;

}