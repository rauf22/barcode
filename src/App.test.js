/* eslint-env jest */
import { shallowMount } from "@vue/test-utils";
import Foo from "./components/Foo.vue";

describe("test App", () => {
  test("works", () => {
    const wrapper = shallowMount(Foo);
    expect(wrapper.get("div")).toBeTruthy();
  });
});
