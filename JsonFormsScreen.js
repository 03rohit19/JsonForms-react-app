import React from "react";
import { JsonForms } from "@jsonforms/react";
import { materialRenderers } from "@jsonforms/material-renderers";
import schema from "../utils/schema.json";
import { ThemeProvider } from "@mui/material";
import { customizedTheme } from "../App";


const data = {
  name: "xyz",
  category: "Laptop",
  cost: "₹ 51,084",
  company: "Lenovo",
  version: "ThinkBook 14 Gen 2 (14,intel)",
  description:
    "Turbocharge your business with Lenovo ThinkBook 14 Gen 2 (14,intel)",
  review: "0",
  rating: 0,
};

function JsonFormsScreen() {
  return (
    <div className="flex flex-col w-full bg-slate-600 border-solid border-4 border-black ;  mt-2">
      <div className="p-4 w-3/4">
        <ThemeProvider theme={customizedTheme}>
          <JsonForms
            schema={schema}
            data={data}
            uischema={{
              type: "HorizontalLayout",
              elements: [
                {
                  type: "Control",
                  scope: "#/properties/name",
                },
                {
                  type: "Control",
                  scope: "#/properties/category",
                },
              ],
            }}
            renderers={materialRenderers}
          />
        </ThemeProvider>
      </div>

      <div className="flex justify-between">
        <div className="flex w-1/2">
          <div className="w-[100%]">
            <img
              src="https://www.lenovo.com/medias/ThinkBook-14-Gen-2-Intel-hero.png?context=bWFzdGVyfHJvb3R8NjYwMDh8aW1hZ2UvcG5nfGg2NC9oZjYvMTMwMzMyMzY0NjM2NDYucG5nfDdlZWU5OGJlYzllYWI0OTM2NDcyMjMwYzA4ZmY3OWRjZDFkNTI4NjgxNWJhOGRmNmZlYTE3OWUzODhmOWQyZjM"
              alt="ThinkBook-14-Gen-2"
              className="h-64 w-80 object-cover"
            />
          </div>

          <div className="flex flex-col w-[100%]">
            <div className=" p-4 mb-2 w-96 flex flex-row ">
              <JsonForms
                schema={schema}
                data={data}
                uischema={{
                  type: "VerticalLayout",
                  elements: [
                    {
                      type: "Control",
                      scope: "#/properties/version",
                    },
                    {
                      type: "Control",
                      scope: "#/properties/cost",
                    },
                  ],
                }}
                renderers={materialRenderers}
              />
              <div className="-mt-2 p-4 float-right ">
                <button className="bg-blue-600 text-white px-2 py-2 rounded-md">
                  badges
                </button>
              </div>
            </div>
            <div className=" p-4 w-full -mt-10  flex flex-col">
              <JsonForms
                schema={schema}
                data={data}
                uischema={{
                  type: "VerticalLayout",
                  elements: [
                    {
                      type: "Control",
                      scope: "#/properties/company",
                    },
                    {
                      type: "Control",
                      scope: "#/properties/description",
                    },
                  ],
                }}
                renderers={materialRenderers}
              />
              <div className="mt-1 py-2">
                <button className="bg-gray-500 text-white px-2 py-2 rounded-sm ">
                  Product Tag
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center w-4/12">
          <div className="p-4">
            <JsonForms
              schema={schema}
              data={data}
              uischema={{
                type: "HorizontalLayout",
                elements: [
                  {
                    type: "Control",
                    scope: "#/properties/review",
                  },
                  {
                    type: "Control",
                    scope: "#/properties/rating",
                  },
                ],
              }}
              renderers={materialRenderers}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 m-2 p-2 absolute top-0 right-0 mr-4">
        <Switch color="primary" />
        <button className="bg-black text-white px-2 py-2 rounded-md border border-gray-100">
          View Full
        </button>
      </div>
    </div>
  );
}

export default JsonFormsScreen;
