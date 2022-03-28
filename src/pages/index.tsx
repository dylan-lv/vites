import { defineComponent } from "vue";
import Foo from "~/components/Foo";
export default defineComponent({
  setup() {},
  render() {
    return <div>
      <p>
        <a href="https://github.com/hayeslv/vites/" target="_blank">Vites</a>
      </p>
      <p>
        <em>Vite Starter Template</em>
      </p>
      <Foo />
    </div>;
  },
});
