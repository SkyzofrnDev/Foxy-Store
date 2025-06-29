import React from "react"

const FaqPage = ({ title, data }) => {
  return (
    <div>
      <h2 className="text-5xl mb-10">{title}</h2>
      <div className="space-y-3">
        {data.map((item, i) => (
          <details key={i} className="group border rounded-lg p-4">
            <summary className="cursor-pointer font-medium group-open:text-blue-400">
              {item.q}
            </summary>
            <p className="mt-2 text-gray-400">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}

export default FaqPage
