import { faker } from '@faker-js/faker'

export const attendees = Array.from({length: 200}).map( () =>{
    return
        {
           id: faker.number.int()
        //    name  :faker.person.fullName()
        //    email:faker.internet.email()
        //    createdAt:faker.date.recent({ days: 30})
        //    chechedAt:faker.date.recent({days:7})

        }
    
})