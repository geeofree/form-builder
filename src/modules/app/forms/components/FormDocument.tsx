import { Input } from "@/components";
import { useMemo } from "react";

type LayoutChild = {
  id: string;
  type: "layout" | "field";
};

type LayoutChildren = LayoutChild[];

type Layout = {
  id: string;
  title: string | null;
  type: "flex" | "grid";
  children: LayoutChildren | null;
};

type Field = {
  id: string;
  type: string;
  name: string;
  label: string;
};

type Document = {
  root: Layout;
  layouts: Record<string, Layout>;
  fields: Record<string, Field>;
};

export type FormDocument = {
  document: Document;
};

function getDocumentContent(document: Document) {
  const renderField = (field: Field, parentId?: string) => {
    const key = parentId ? `${parentId}_${field.id}` : field.id;
    switch (field.type) {
      case "text":
        return <Input key={key} name={field.name} />;
      case "password":
        return <Input key={key} type="password" name={field.name} />;
      default:
        return null;
    }
  };

  const renderLayout = (layout: Layout, parentId?: string) => {
    return (
      <div key={parentId ? `${parentId}_${layout.id}` : layout.id}>
        {layout.title && <h1>{layout.title}</h1>}
        {layout.children &&
          layout.children.map((layoutChild) => {
            switch (layoutChild.type) {
              case "field":
                return renderField(document.fields[layoutChild.id], layout.id);
              case "layout":
                return renderLayout(
                  document.layouts[layoutChild.id],
                  layout.id,
                );
              default:
                return null;
            }
          })}
      </div>
    );
  };

  return renderLayout(document.root);
}

export function FormDocument(props: FormDocument) {
  const { document } = props;
  const documentContent = useMemo(
    () => getDocumentContent(document),
    [document],
  );
  return documentContent;
}
