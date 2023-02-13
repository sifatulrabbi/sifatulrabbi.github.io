import { Label, TextInput, Radio, Textarea, Button } from "flowbite-react"
import { useState } from "react"
import { MdSend } from "react-icons/md"

const Form: React.FC = () => {
  const [clientName, setClientName] = useState("")
  const [clientEmail, setClientEmail] = useState("")
  const [clientPhone, setClientPhone] = useState("")
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")

  const infoSection = [
    {
      name: "name",
      label: "Name",
      placeholder: "Enter your name",
      required: true,
      value: clientName,
      onChange: (e: React.SyntheticEvent<HTMLInputElement>) =>
        setClientName(e.currentTarget.value),
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email address",
      required: true,
      value: clientEmail,
      onChange: (e: React.SyntheticEvent<HTMLInputElement>) =>
        setClientEmail(e.currentTarget.value),
    },
    {
      name: "phone",
      label: "Phone",
      placeholder: "Enter your phone",
      required: false,
      value: clientPhone,
      onChange: (e: React.SyntheticEvent<HTMLInputElement>) =>
        setClientPhone(e.currentTarget.value),
    },
  ]

  const services = [
    "Fullstack development",
    "Frontend development",
    "Backend development",
  ]

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 format flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {infoSection.map((item) => (
          <div key={item.name + item.label}>
            <Label
              htmlFor={item.name}
              value={item.label}
              className="mb-2 block"
            />
            <TextInput
              id={item.name}
              name={item.name}
              placeholder={item.placeholder}
              required={item.required}
              value={item.value}
              onChange={item.onChange}
            />
          </div>
        ))}
      </div>

      <fieldset className="flex flex-row flex-wrap gap-4">
        <legend className="mb-4 text-gray-800">
          What kind of services do you need?
        </legend>
        {services.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <Radio
              id={item.replace(/ /gi, "-")}
              name="service"
              value={item}
              onChange={(e) => setService(e.currentTarget.value)}
            />
            <Label htmlFor={item.replace(/ /gi, "-")}>{item}</Label>
          </div>
        ))}
      </fieldset>

      <div>
        <Label htmlFor="message" value="Message" className="block mb-2" />
        <Textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          placeholder="Write your message..."
          className="min-h-[100px]"
        />
      </div>

      <Button type="submit" className="max-w-max flex gap-2">
        <MdSend className="mr-2" />
        Send
      </Button>
    </form>
  )
}

export default Form
