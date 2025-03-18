import React from "react";

const Cancel = () => {
  return (
    <div>
      <div>
        <div className="p-6 py-12 bg-green-600 text-gray-50">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-6xl tracking-tighter font-bold">
                Payment &nbsp;
                <br className="sm:hidden" />
                Cancel
              </h2>
              <div className="space-x-2 text-center py-2 lg:py-0"></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
