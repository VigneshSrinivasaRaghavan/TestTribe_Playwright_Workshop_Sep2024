import { test, expect } from '@playwright/test';

test('GET API', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    const responseJson = await response.json();
    console.log(responseJson);
    expect(response.status()).toEqual(200);
    expect(responseJson.data.first_name).toEqual('Janet');
});

test('POST API', async ({ request }) => {
    const userData = {
        "name": "Vignesh S",
        "job": "Trainer"
    }

    const response = await request.post('https://reqres.in/api/users',{
        data:userData,
    });
    const responseJson = await response.json();
    console.log(responseJson);
    expect(response.status()).toEqual(201);
    expect(responseJson.name).toEqual(userData.name);
    expect(responseJson.job).toEqual(userData.job);
});


test('PUT API', async ({ request }) => {
    const userData = {
        "name": "Vignesh Srinivasa Raghavan",
        "job": "Instructor"
    }

    const response = await request.put('https://reqres.in/api/users/2',{
        data:userData,
    });
    const responseJson = await response.json();
    console.log(responseJson);
    expect(response.status()).toEqual(200);
    expect(responseJson.name).toEqual(userData.name);
    expect(responseJson.job).toEqual(userData.job);
});

test('DELETE API', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toEqual(204);
});