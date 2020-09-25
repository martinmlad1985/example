import React from "react";
import MyPostReducer, {ChangePostttCreator} from "./MyPostsReducer";

it('post will be added successfully', () => {
    //1. start data
    let state = {
        arrPosts: ['Post1', 'Post2', 'Post3', 'Post4']
    };
    let action = ChangePostttCreator('Hello World');
    //2. action
    let testState = MyPostReducer(state, action);
    //3. result
    expect(testState.arrPosts.length).toBe(5);
})

