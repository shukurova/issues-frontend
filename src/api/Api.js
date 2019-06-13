export class Api {
    static API_URL = 'http://localhost:8080/api';

    static async getAll() {
        return fetch(`${this.API_URL}/issues`);
    }

    static async add(name, description, tags, ownerId, assignmentId) {
        return fetch(`${this.API_URL}/issues`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    description: description,
                    tags: [tags],
                    ownerId: ownerId,
                    assignmentId: assignmentId
                }),
            }
        );
    }

    static async removeById(id) {
        return fetch(`${this.API_URL}/issues/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }
}