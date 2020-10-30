//const initiatives = require('../data/initiatives.json');
const { query } = require('./util/hasura');

exports.handler = async () => {
    const { initiatives } = await query({
        query: `
            query {
                initiatives {
                    id
                    title
                    deadline
                    description
                    fb_url
                    goal
                    ig_url
                    main_image
                    status
                    web_url
                }
            }
          
        `
    });
    return {
        statusCode: 200,
        body: JSON.stringify(initiatives)
    }
}