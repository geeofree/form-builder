import { FormDocument } from "@/modules/app/forms/components";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

export default function NewForm() {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag((params) => {
    const {
      down,
      movement: [mx, my],
    } = params;
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
  });

  return (
    <div className="grid grid-cols-[1fr,max-content] min-h-screen p-16">
      <main className="border rounded">
        <FormDocument
          document={{
            root: {
              id: "root",
              title: "My Document",
              type: "flex",
              children: [{ id: "foo", type: "layout" }],
            },
            layouts: {
              foo: {
                id: "bar",
                title: "Foo",
                type: "flex",
                children: [
                  { id: "420", type: "field" },
                  { id: "bar", type: "layout" },
                ],
              },
              bar: {
                id: "bar",
                title: "Bar",
                type: "flex",
                children: [
                  { id: "420", type: "field" },
                  { id: "666", type: "field" },
                ],
              },
            },
            fields: {
              "666": {
                id: "666",
                type: "text",
                name: "username",
                label: "Username",
              },
              "420": {
                id: "696969-420",
                type: "password",
                name: "password",
                label: "Password",
              },
            },
          }}
        />
      </main>
      <aside className="border rounded">
        <animated.div
          {...bind()}
          style={{ x, y }}
          className="w-9 h-9 bg-red-400"
        />
      </aside>
    </div>
  );
}
