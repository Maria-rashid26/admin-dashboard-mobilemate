// import React from "react";

// const MobileDetails = () => {
//   return (
//     <div className="border-2 flex text-sm text-gray-700 py-2 my-4">
//       <div className="border-2 border-green-600 mr-4">
//         <img
//           className=" h-[230px] w-[300px] mx-auto object-contain"
//           src="data:image/jpeg;base64,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"
//           alt=""
//         />
//         <div className="mx-12 space-y-1">
//           <p className="border-b">
//             Name: <span>onPlusX</span>
//           </p>
//           <p className="border-b">
//             Price: <span>68263</span>
//           </p>
//           <p className="border-b">
//             Price in USD: <span>753</span>
//           </p>
//           <p className="border-b">
//             Ratings: <span>4.7</span>
//           </p>
//           <p className="border-b">
//             Colors: <span>753</span>
//           </p>
//           <p className="border-b">
//             Weight: <span>233g</span>
//           </p>
//           <p className="border-b">
//             Size: <span>4</span>
//           </p>
//           <p className="border-b">
//             Features: <span> LED flash, panorama, HDR</span>
//           </p>
//           <p className="border-b">
//             CPU: <span> Quad-core 2.3 GHz Krait 400</span>
//           </p>
//           <p className="border-b">
//             Resolution:
//             <span>1080 x 1920 pixels, 16:9 ratio (~441 ppi density)</span>
//           </p>
//         </div>
//       </div>
//       <div className="boorder border-teal-600 space-y-1 ">
//       <p className="border-b">
//           CreatedOn: <span>"seconds":1446348780,"nanoseconds":0</span>
//         </p>
//         <p className="border-b">
//           FrontCam: <span>8</span>
//         </p>
//         <p className="border-b">
//           Launched: <span>Yes</span>
//         </p>
//         <p className="border-b">
//           2GBand: <span>GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2</span>
//         </p>
//         <p className="border-b">
//           GPS: <span>Yes, with A-GPS, GLONASS, BDS</span>
//         </p>
//         <p className="border-b">
//           ROM: <span>16</span>
//         </p>
//         <p className="border-b">
//           GPU: <span> Adreno 330</span>
//         </p>
//         <p className="border-b">
//           SIM: <span>Hybrid Dual SIM (Nano-SIM, dual stand-by)</span>
//         </p>
//         <p className="border-b">
//           RefreshRateFps: <span>null</span>
//         </p>
//         <p className="border-b">
//           bluetooth: <span>4.0, A2DP</span>
//         </p>
//         <p className="border-b">
//           Model: <span> X</span>
//         </p>
//         <p className="border-b">
//           Chipset: <span>Qualcomm Snapdragon 801 (28 nm)</span>
//         </p>
//         <p className="border-b">
//           4GBand:{" "}
//           <span>
//             LTE band 1(2100), 3(1800), 5(850), 7(2600), 8(900), 20(800),
//             38(2600), 40(2300) - Europe
//           </span>
//         </p>
//         <p className="border-b">
//           Technology: <span> GSM / HSPA / LTE</span>
//         </p>
//         <p className="border-b">
//           OS:
//           <span>
//             Android 5.1.1 (Lollipop), upgradable to 6.0.1 (Marshmallow) OxygenOS
//             2.2.3
//           </span>
//         </p>
//         <p className="border-b">
//           Dimensions:
//           <span>140 x 69 x 6.9 mm (5.51 x 2.72 x 0.27 in)</span>
//         </p>
//         <p className="border-b">
//           Dimensions:
//           <span>140 x 69 x 6.9 mm (5.51 x 2.72 x 0.27 in)</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MobileDetails;
import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";

const MobileDetails = () => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [details, setDetails] = useState([
    { label: "CreatedOn", value: `"seconds":1446348780,"nanoseconds":0` },
    { label: "FrontCam", value: "8" },
    { label: "Launched", value: "Yes" },
    { label: "2GBand", value: "GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2" },
    { label: "GPS", value: "Yes, with A-GPS, GLONASS, BDS" },
    { label: "ROM", value: "16" },
    { label: "GPU", value: "Adreno 330" },
    { label: "SIM", value: "Hybrid Dual SIM (Nano-SIM, dual stand-by)" },
    { label: "RefreshRateFps", value: "null" },
    { label: "Bluetooth", value: "4.0, A2DP" },
    { label: "Model", value: "X" },
    { label: "Chipset", value: "Qualcomm Snapdragon 801 (28 nm)" },
    {
      label: "4GBand",
      value:
        "LTE band 1(2100), 3(1800), 5(850), 7(2600), 8(900), 20(800), 38(2600), 40(2300) - Europe",
    },
    { label: "Technology", value: "GSM / HSPA / LTE" },
    {
      label: "OS",
      value:
        "Android 5.1.1 (Lollipop), upgradable to 6.0.1 (Marshmallow) OxygenOS 2.2.3",
    },
    { label: "Dimensions", value: "140 x 69 x 6.9 mm (5.51 x 2.72 x 0.27 in)" },
  ]);

  const handleClick = (index) => {
    setEditingIndex(index);
  };

  const handleChange = (index, event) => {
    const newDetails = [...details];
    newDetails[index].value = event.target.value;
    setDetails(newDetails);
  };

  const handleBlur = () => {
    setEditingIndex(null);
  };

  return (
    <div className="text-sm text-gray-700 py-2 my-4">
      <div className=" py-3 flex border-green-600 ">
        <img
          className="h-[230px] w-[300px] mx-auto object-contain shadow-md hover:shadow-gray-900"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhEREhIQFRAVEBYQFRAQEhAQEhUVFxEXGBYSFxYYHSgiGBolHhUVIjEjJSorOi4yFyAzODMsNykwLisBCgoKDg0OGxAQGi0fHiYrNS0tLS0tLS0tLS0uKzItLS0tLSsvLS0rLS0tLS0tLS0tLS0rLSstKy0tLS02LS0rK//AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwMEBQYIAgH/xABPEAABAwICBAgHCwoDCQAAAAABAAIDBBESIQUHMUEGEyIyUWFxgRQzUnORobMXI3J0kpOxtNHS0yQ0QkNTVFViwfBFtcMVNUSChJSywuH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAhEQEAAgIDAAIDAQAAAAAAAAAAARECIQMSMQRBE1HRof/aAAwDAQACEQMRAD8AlNERAREQEREBERAREQERRzwz1ivhl8EooXTVJOEWa59zhvZrW8p2WeVtxvuUsSMiiIVPCd3KFG4A52vh9RluFaaW0xwhpInTzwGOFlsUhJIbdwaL4ZCdpA702uk0IudxrR0h+0Z6JPvqozWdXn9Y3ubL99NmnQiLn12syv8A2g72y/fVJ+s/SA/WM72yj/3TZp0OigfQXDTTNc90VK0SyNZxjmtxizbgXJdIBtIWcL+E/wC6O+WPxU2aS4iiKHh3pPR8jGaTo3tjcbB+FwuegOJcHnqBHfsUqaOrWTxslYbte0OGYO0AjMZHIg333CWUuURFUEREBERAREQEREBERAREQEREBERAREQEREFKpPId8Ej0rT9TlDG41dc4Dj38SzGQLtEkDJ5LHdifNn8ELb6sch3YtW1NNvSz+cp/8up1PtfpvFTRY3OcKiVmK2TH2DbYNmdhzej9IqlpDQ8VTSPo53ukjfHxbnucOMO8Pv5QNiOwK84o9XpVtpChfKzAyV0TsTTxjMBdYOBLeUCLEC3etIiiTUJFc4dIvDb5A07HEDrIkF/QF8GoVg2aScOymaP9VSq/Rry4kTSAFxOEFpGdrAXFwB1dK8jRstreESX8q0eLf1W39CCLTqGZ/E3/APbj8VfDqEYduknd9M38VSi7RUtjhqJA4km5wuGZ3A7ANwHrXsaOlv491rHIhm8WGfVt7fQgwOr3V/BocSuZM6WeUBrpXhrAGg3wtYCbZ7bk7AtokpQZOM42QHijHgEhEeZvxmDZiGy6pU9E9pJMjn5Ws7CBt25f3mrjij1elShiuEmhmVFDVU8jzIHQvcHPs5zHtYSx462kA9y1bVs/8mLf0WuyHRiaJD65COwBbhUUhZHUuLrh0TzYlxtyHZC7iBkQMgNmdzmtN1aj3iT4bPYRqT9ERpuCIioIiICIiAiIgIiICIiAiIgIiICIiAiIgIiILeuF2O7vU4Fa7qT/ADWf4dP/AJdTrY602Y7uHpcB/VQvoDhjVaPZxdPxWF8dPI7jGF5xeBxNyzGVmhSPSZ06KRQV7qukemm+ZP3k91XSPTTfMn7y1TPaE6qnU802LhltZbEN+VwQoO91XSPTTfMn7y+HWrpHppvmT95KO0Jk0PIXGTOawcBaQgi+FriQbX2uO/cskoIptZ2kGggGnttzje4+lzyjtaukt3g1vMn76594do45TuighutXSXTTdHiT99eoNamkSXAmmyIHiT5N/LTvB+KUx1crzFUBwAaIZLHC4fonedq0bVr4iT4bfYRLR9Ma29IBjmXpjdhDveTsLSLc7at31cOtE9v8wPohhH9QrfjNVcNxREWmRERAREQEREBERAREQEREBERAREQEREBERBb1wux3d6nBc8TbWfF6f6rGuh64+9u/5f8AyC54m2s+L0/1WNI9TLx4REWnMREQXDWZDszSUtYAXHsY3N5HSR+iO30FVBMGtaGtxy4QRGBcD+Z/2Hbvy227NE2u+eWxJuWixcT29PcV5MpiJfRxiZiKeY6m5AZGLk7Dd7j/AH2LJUVO0gmxxEi5ad9rb79Cr0rA0HBHhG8khpPU9x5o6rnsVs6rDTiBD3NyGH3unjvtF/0j6+pc45N+Ov41jX8Gi5kr2SFxAPJeAC7LOxG/uUt6ueY7v9lTqL59JPawtLcnNIa8NLQSQb2B2jbmpQ1c8x3f7KnXpxyt5OTGMW5oiLo4iIiAiIgIiICIiAiIgIiICIiAiIgIiICIiChWC7Hdx9BBXO821nxen+qxromq5juxc7TbWfF6f6rGkepl48IiLTmIiIPJ0nIbQx2BzBAGHIHnmwuf/iyFNAWWLWmaX9q73uJvwXHb3LGVNMRy8Ls286Mh2R2gjK3pXiq0sXAYny5NDSA0XNha+Iuy9BXkzwudPpYclRtlZXMGdRLjt+qi5Ebe8jP0BUjpEC3FRNAH6x4yHY52wfBWCOkAOYzPy3nG77ArSWZzzdzie0pjw/tMvkV4ymldLlwJLscga5ocMmsBGeHpPWpu1cN96kO8PA7jDFf6AueZGZHsP0LojVx4mTzjfYRrtGMY1EPNlnOW5bciItsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiCjVcx3YudptrPi9P9VjXRNVzHdi56lgxNDsViIKawyzPgsaR6mXigP7tmvWA2vu+jt6O9VqasaGgOyeNo2dtukKvDVA3IZ1XLgNm3atuawRSRo/g5TOiilNGAwUT5HPkfVn34RRPs+KM3kacTntdEbEHCWggLxoDglFNFRTSU5aZK1zpml0zWiB5qGMhHKxDC6KM322fmSotNNihxMHwB9KxGk9G79ilHQmjqWoihwwswSl954HVLWN4qspIWsYJSSA9s8juXn6MvY4K0sx5dKQZGtDhxlUDDlXDjG3flfwaHnXGZ6Vxxwm7l6cuSOtQg8ssbKpgVadmx3SBey+kWAO87Ozp/vrXWnJSkaA118zY8nu3/Yp+1ceJk8432Ea5/l2HsP0LoDVx4mTzjfYRrM/RDbkRFQREQEREBERAREQEREBERAREQEREBERAREQUarmO7FztMM2dHg9P02/NY10TVcx3YueXvAwgtBPg9PtJH/CxpHqZeLjQVCypqIYHyNja92DGcOXJJa0AkDE4gNFyM3BZ2PgrSkkcfVh40hDQZ0wis+cmznBzw4YQHA5bRlcG61nRlY6nkZK0ML23ykaHscC0tc1zdhBDiO/cVsdDpCtq548LWcZNVx1jHvjcyIyUrC1gB2YGgBpGedrm62wydTwanhdUNjrau9NQeERML5I5A53Gu8Gs2QhmJtO5+RzGHJV5eCcjJPz6u4x72MbKxszxgBp3ESPa+7Diq3Ft+TyXEkFy+x1Ok2ucGOoiWF0UhjLXB/g8dnRPO/CKrDYWN223Z20mldICodT8ZQOmGKR8jXRubA2Hi+OjfIT7238kYXtOfJ3XUVjq7gm2mdUQTVlfGxtI/SToYWMMbmxVToQSwygF9mxOBtvOYsFT4PaFlrIKaWWt0iHVtS6keWPdJFyHYbTOdKHOBbjsMJGRGSq6R0VpV75C9tK0yNfovAXsD3Rz1zXOka0OJLeNmaMe4Hm71jqSnrKcB8TqSRuicVVjifxzWmofZwJBGMgxHk5WAKjTJTau2hsl6uRrrXjjdCwPYWUbamSOotIQx2FwHJvnY7FjeHvBBlA0SMqWzXqpKbCxoHFiONpwuz54vmOwrK6UqtJUMU8dQKa2A05eGB8mNlFDGZGv6XQyRNLt+HYCFpeldPzVQe2Ti7Pq5K44GlvvsjGsdbM8mzBYduaCxpocZfcXYyN8jt2TWkgX6zb1qeNXHiZPON9hGoZoJ2x0s2fKc2S/Tk0Bo+k96mbVx4mTzjfYRrnd5Os41jDbkRFtzEREBERAREQEREBERAREQEREBERAREQEREFGq5juxc6zHNgsfzanN935tGuiqrmO7FzlVuLSxwv+bU4I/wCmjSPUy8fVfaK0oYZGOcHSMD4jxRfLhPFyNc27WkYsIBwg5AkHdZY2KpaBmBssTc32L6yVjRbMm2+xPVkVthvNLw7ZGJ2Ngc1ss9TMWB2ZMxjLXOLrnECx17WHKFhkrGs4SRSVstTgqXRzwzQyte+ESNEzHsIiLWBoDWubbEDszJ2rU2bcRIv0XyA6F7xDpChbdJuFsVbUU73Ukhnp6wTQkTe9tj8Iikc54AF5MMRb0cq+5UZ+FcEfh0IhqJTVPkE0kskWMA0r4QG8W1rbNLztHrzWCglbTU0suXGuvYndswdmdu3PrWp+G9fr2o2kbhdwybpKMRCNzXY6l4Jc1xcHR3Yw22kFoHZhCjpquaKbAWvuMTSHNvsuDe6pVjA112+Ldy2dTSeb2tILT1tUoiV5QvYYpWPwgAF2JxtckbAb37gD3KbtXHiZPON9hGuf5Bdruw/QugdXHiZPON9hGsdam2+/aK/TbkRFpkREQEREBERAREQEREBERAREQEREBERAREQUarmO7FztNtZ8Xp/qsa6JquY7sXO021nxen+qxpHqZeKHEN22C23VxpGlpZ5n1JYxjqZzGOfC6ccYZGEHC1p3ArVkWmEzO4W6N3VNLtP+Gz7LCw5vTc9+5W+n+FWi5KKpiZJC6ofTSMYWUcsV5CxwbYllm7Rv71EKJS9mV0ZpuBj44pcJaI7HkOJLy5lmZA7m7bbutZU8JtFnYBbzcn4ajuoBD5H9Di0drgQLddrnuVGKAndkvPn8fHPK5mXr4vk5cePWIj/f63LhNpakmhc2AtxF7SAI3tNg+55RaNy1uIYm8W7IXu13kOsL3/lNhfsB3WPhkBFsj6FULXbm27l04uOOOKhy5uWeXK5Wk7C3ECLEA5d3TvHWugNXHiZPON9hGoFmLsLg8Eixtuc3sPR1H1bVPWrjxMnnG+wjWsvpjFtyIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgo1XMd2Lnabaz4vT/AFWNdE1XMd2Lnabaz4vT/VY0j1MvHhERacxERBYVL2F+Hc3O3lPdm5x7MmjqavhqgNllTrcNyAbuJzbZwN+i+9VGaHe5pccja4H9FLdKU3aQXjw/+96pupCSMAJDhdthcndb03CuWaHcdpaDa9hZ3cLHM9A32KlrELaeuuDluP0Kf9XHiZPON9hGoDmpG2OHFzTkcN9m/cp81ceJk8432Eakza1TbkRFUEREBERAREQEREBERAREQEREBERAREQEREFGq5juxQ1wc4IPr2GRsrGBkdPHZzXOJPgcLr5H+ZTLVi7HDqWlaqo7w1DDzmmnDhsI/IYm92bXDuKR6T4w3uXy/vMXzb/tT3L5f3mL5t/2qU2w2yTiitWzSLPcvl/eYvm3/anuXy/vMXzb/tUpiFfHwXBHSLJZSImappMReKqEnFiB4t9ugtPKzWYZq7kB/OGBu8Bjhl2qQ2U1r7Nt8hb+q9OgJBHUszEW1CMI9Wj7EcfEQbk4BI3lG1zcEkA22bFRqdVspaGx1bW8vGXPa97tlgMQINhyrX8oqU2U5F7m9+q28n+q+vpyQR0gj0qTjFtdppEFVqtfhkeamEjinF4Eb7khpOJvKs03F9nStz1bn3iT4bfYRrP6TiEcFQ9xAaIJHONsLQGxkk+pYDVs20Dz0ub6omN+lrh3JMRekiZmNtvREVQREQEREBERAREQEREBERAREQEREBERAREQfHNBBB2EWPYVF+naOt0TVvraECRk2U1NJfC/Muu2xF8y4gA3aXOFi2ylFfHC+RzHQcwpKo1brZrLf7kqT1h81vYL17rFZ/A6r5c34CkI0cZ2xx26MDfsTwSP9mz5LU2aRrV6y6uW19D17LX8VPUx3vbbaDPYqI4e1R/wvSffWVY/0FKPgkfkM+S1BSx+Qz5LfsTZpF54eVX8M0n3VlX+AvkesKqaQ7/ZWkzYg2dVVbmmx2EGDMKUfBY/IZ8lv2J4JH5DPktTZpHnusVn8Dqvlz/gJ7rFZ/A6r5c34CkPwSPyGfJangkfkM+S1NmkV6S4TaS0z+RtpRRU78pXSl7pXNvcsAIa5w6WtbnsJAJKknQGi20sLIW3s0WubYjmSS4jIuLi5xtvcbZK+jia3mtaPggD6F7QERFUEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//2Q=="
          alt="Mobile"
        />
        <img
          className="h-[230px] shadow-md hover:shadow-gray-900 w-[300px] mx-auto object-contain"
          src="data:image/jpeg;base64,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"
          alt="Mobile"
        />
      </div>

      <div className=" px-12 py-3">
        <h2 className="text-2xl font-bold mb-4">Mobile Details</h2>
        <div>
          {details.map((item, index) => (
            <div
              key={index}
              className="my-2 flex border-b"
              onClick={() => handleClick(index)}
            >
          
              <span className="mr-4" >
                <IoMdArrowDropright />
              </span>
              <p className="w-[200px] font-bold ">{item.label}:</p>{" "}
              {editingIndex === index ? (
                <input
                  type="text"
                  value={item.value}
                  onChange={(event) => handleChange(index, event)}
                  onBlur={handleBlur}
                  autoFocus
                  className="border  border-gray-300 p-1  outline-none rounded w-[400px] "
                />
              ) : (
               <div>{ item.value}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileDetails;
