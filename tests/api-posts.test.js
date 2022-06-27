import {describe, it, expect} from 'vitest';
import axios from 'axios';

describe('blogposts api', () => {
    // it('returns a list of blog posts',async () => {
    //     const {data} = await axios.get('http://localhost/api/posts');
    //     expect(data).toBeInstanceOf(Array);
    //     expect(data[0].blogPosts).toBeInstanceOf(Array);
    // })
    // it('returns a single post', async () => {
    //     const {data} = await axios.get('http://localhost/api/posts/62b7f4852cd3567652935a9a');
    //     expect(data.post.id.toString()).toBe('62b7f4852cd3567652935a9a');
    // })
    it('can create a new post', async () => {
        try {
            const {data, status} = await axios.post('http://localhost/api/post', {
                name: 'name',
                text: 'some text',
                intro: 'some intro',
                final: 'some final',
                tags: ['popular', 'interesting']
            });
            expect(status).toBe(201);
            expect(data.post.text).toBe('some text');
        } catch (error) {
            throw error;
        }
    })
})