-- This GUI made by !LUCIFER#9773

-- Instances:

local ScreenGui = Instance.new("ScreenGui")
local Frame = Instance.new("Frame")
local TextButton = Instance.new("TextLabel")
local idk = Instance.new("TextButton")
local idk1 = Instance.new("TextButton")
local idk2 = Instance.new("TextButton")
local idk3 = Instance.new("TextButton")
local idk4 = Instance.new("TextButton")
local idk5 = Instance.new("TextButton")
local idk6 = Instance.new("TextButton")
local idk7 = Instance.new("TextButton")
local idk8 = Instance.new("TextButton")
local idk9 = Instance.new("TextButton")
local idk12 = Instance.new("TextButton")
local idk13 = Instance.new("TextButton")
local idk14 = Instance.new("TextButton")
local close = Instance.new("TextButton")

--Properties:

ScreenGui.Parent = game.Players.LocalPlayer:WaitForChild("PlayerGui")
ScreenGui.ResetOnSpawn = false

Frame.Parent = ScreenGui
Frame.BackgroundColor3 = Color3.fromRGB(183, 101, 255)
Frame.Position = UDim2.new(0.369825214, 0, 0.423832893, 0)
Frame.Size = UDim2.new(0, 350, 0, 250)
Frame.Active = true
Frame.Draggable = true


TextButton.Parent = Frame
TextButton.BackgroundColor3 = Color3.fromRGB(125, 102, 255)
TextButton.Position = UDim2.new(0.01, 0, 0.00832893, 0)
TextButton.Size = UDim2.new(0, 303, 0, 35)
TextButton.Font = Enum.Font.Cartoon
TextButton.Text = "MALIK30031/ (1)🦅"
TextButton.TextColor3 = Color3.fromRGB(0, 0, 0)
TextButton.TextSize = 40.000

idk.Parent = Frame
idk.BackgroundColor3 = Color3.fromRGB(125, 102, 255)
idk.Position = UDim2.new(0.01, 0, 0.2, 0)
idk.Size = UDim2.new(0, 94, 0, 35)
idk.Font = Enum.Font.Cartoon
idk.Text = "ايم بوت وكشف"
idk.TextColor3 = Color3.fromRGB(0, 0, 0)
idk.TextSize = 20.000
idk.MouseButton1Down:connect(function()
 loadstring(game:HttpGet("https://raw.githubusercontent.com/Drrushh/Drrushh/main/Arki",true))();
end)

idk1.Parent = Frame
idk1.BackgroundColor3 = Color3.fromRGB(125, 102, 255)
idk1.Position = UDim2.new(0.01, 0, 0.4, 0)
idk1.Size = UDim2.new(0, 94, 0, 35)
idk1.Font = Enum.Font.Cartoon
idk1.Text = "ادمن"
idk1.TextColor3 = Color3.fromRGB(0, 0, 0)
idk1.TextSize = 20.000
idk1.MouseButton1Down:connect(function()
loadstring(game:HttpGet('https://raw.githubusercontent.com/EdgeIY/infiniteyield/master/source'))()
end)

idk2.Parent = Frame
idk2.BackgroundColor3 = Color3.fromRGB(125, 102, 255)
idk2.Position = UDim2.new(0.34, 0, 0.4, 0)
idk2.Size = UDim2.new(0, 94, 0, 35)
idk2.Font = Enum.Font.Cartoon
idk2.Text = "بروك/سكنات"
idk2.TextColor3 = Color3.fromRGB(0, 0, 0)
idk2.TextSize = 20.00
idk2.MouseButton1Down:connect(function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/speedwavevip/Speed_Aya/refs/heads/main/Brookhaven%20lraq"))()
end)

idk3.Parent = Frame
idk3.BackgroundColor3 = Color3.fromRGB(125, 102, 255)
idk3.Position = UDim2.new(0.34, 0, 0.2, 0)
idk3.Size = UDim2.new(0, 94, 0, 35)
idk3.Font = Enum.Font.Cartoon
idk3.Text = "رادقول ازرق"
idk3.TextColor3 = Color3.fromRGB(0, 0, 0)
idk3.TextSize = 20.000
idk3.MouseButton1Down:connect(function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/H20CalibreYT/SystemBroken/main/script"))()
end)

idk4.Parent = F
idk4.BackgroundColor3 = Color3.fromRGB(125, 102, 255)
idk4.Position = UDim2.new(0.69, 0, 0.2, 0)
idk4.Size = UDim2.new(0, 94, 0, 35)
idk4.Font = Enum.Font.Cartoon
idk4.Text = "محذوف"
idk4.TextColor3 = Color3.fromRGB(0, 0, 0)
idk4.TextSize = 20.000
idk4.MouseButton1Down:connect(function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/HeyGyt/walkonwalls/main/main"))()
end)

idk5.Parent = Frame
idk5.BackgroundColor3 = Color3.fromRGB(125, 102, 255)
idk5.Position = UDim2.new(0.69, 0, 0.4, 0)
idk5.Size = UDim2.new(0, 94, 0, 35)
idk5.Font = Enum.Font.Cartoon
idk5.Text = "كلكر تليبورد"
idk5.TextColor3 = Color3.fromRGB(0, 0, 0)
idk5.TextSize = 20.000
idk5.MouseButton1Down:connect(function()
mouse = game.Players.LocalPlayer:GetMouse()
tool = Instance.new("Tool")
tool.RequiresHandle = false
tool.Name = "Equip to Click TP"
tool.Activated:connect(function()
local pos = mouse.Hit+Vector3.new(0,2.5,0)
pos = CFrame.new(pos.X,pos.Y,pos.Z)
game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = pos
end)
tool.Parent = game.Players.LocalPlayer.Backpack

end)

idk6.Parent = Frame
idk6.BackgroundColor3 = Color3.fromRGB(125, 102, 255)
idk6.Position = UDim2.new(0.69, 0, 0.8, 0)
idk6.Size = UDim2.new(0, 94, 0, 35)
idk6.Font = Enum.Font.Cartoon
idk6.Text = "تثبيت شاشه"
idk6.TextColor3 = Color3.fromRGB(0, 0, 0)
idk6.TextSize = 20.000
idk6.MouseButton1Down:connect(function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/Sector9922/SECTOR-SHIFT-LOCK/main/SECTOR%20SHIFT%20LOCK"))()
end)

idk7.Parent = Frame
idk7.BackgroundColor3 = Color3.fromRGB(125, 102, 255)
idk7.Position = UDim2.new(0.01, 0, 0.6, 0)
idk7.Size = UDim2.new(0, 94, 0, 35)
idk7.Font = Enum.Font.Cartoon
idk7.Text = "اختفاء"
idk7.TextColor3 = Color3.fromRGB(0, 0, 0)
idk7.TextSize = 20.000
idk7.MouseButton1Down:connect(function()
loadstring(game:HttpGet('https://pastebin.com/raw/3Rnd9rHf'))()
end)

idk8.Parent = Frame
idk8.BackgroundColor3 = Color3.fromRGB(125, 102, 255)
idk8.Position = UDim2.new(0.34, 0, 0.6, 0)
idk8.Size = UDim2.new(0, 94, 0, 35)
idk8.Font = Enum.Font.Cartoon
idk8.Text = "mm2"
idk8.TextColor3 = Color3.fromRGB(0, 0, 0)
idk8.TextSize = 20.000
idk8.MouseButton1Down:connect(function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/Au0yX/Community/main/XhubMM2"))()

	

end)


idk12.Parent = Frame
idk12.BackgroundColor3 = Color3.fromRGB(125, 102, 255)
idk12.Position = UDim2.new(0.69, 0, 0.6, 0)
idk12.Size = UDim2.new(0, 94, 0, 35)
idk12.Font = Enum.Font.Cartoon
idk12.Text = "طيران"
idk12.TextColor3 = Color3.fromRGB(0, 0, 0)
idk12.TextSize = 20.000
idk12.MouseButton1Down:connect(function()
loadstring(game:HttpGet('https://github.com/HUBSXOBOX/HUBSXOBOX/raw/main/Hussin%20Danis'))()
end)

idk13.Parent = Frame
idk13.BackgroundColor3 = Color3.fromRGB(125, 102, 255)
idk13.Position = UDim2.new(0.34, 0, 0.8, 0)
idk13.Size = UDim2.new(0, 94, 0, 35)
idk13.Font = Enum.Font.Cartoon
idk13.Text = "fling"
idk13.TextColor3 = Color3.fromRGB(0, 0, 0)
idk13.TextSize = 20.000
idk13.MouseButton1Down:connect(function()
loadstring(game:HttpGet("https://pastefy.app/Vf5POrA6/raw"))("t.me/arceusxscripts")
end)

idk14.Parent = Frame
idk14.BackgroundColor3 = Color3.fromRGB(125, 102, 255)
idk14.Position = UDim2.new(0.01, 0, 0.8, 0)
idk14.Size = UDim2.new(0, 94, 0, 35)
idk14.Font = Enum.Font.Cartoon
idk14.Text = "سكربت القمر"
idk14.TextColor3 = Color3.fromRGB(0, 0, 0)
idk14.TextSize = 20.000
idk14.MouseButton1Down:connect(function()
loadstring(game:HttpGet('https://raw.githubusercontent.com/Ndora1/Ndora1/main/Nokia%20Hub.lua'))()
end)

idk9.Parent = Frame
idk9.BackgroundColor3 = Color3.fromRGB(125, 102, 255)
idk9.Position = UDim2.new(0.69, 0, 0.2, 0)
idk9.Size = UDim2.new(0, 94, 0, 35)
idk9.Font = Enum.Font.Cartoon
idk9.Text = "مراقبه الناس"
idk9.TextColor3 = Color3.fromRGB(0, 0, 0)
idk9.TextSize = 20.000
idk9.MouseButton1Down:connect(function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/GhostPlayer352/Test4/refs/heads/main/ScriptAuthorization%20Source"))()Ioad("38721bd8d7c0aa7e0e6999ae0c2cc98d")
end)

close.Parent = Frame
close.BackgroundColor3 = Color3.fromRGB(125, 102, 255)
close.Position = UDim2.new(0.879518092, 0, 0.00832893, 0)
close.Size = UDim2.new(0, 40, 0, 35)
close.Font = Enum.Font.GothamBlack
close.Text = "X"
close.TextColor3 = Color3.new(0, 0, 0)
close.TextScaled = true
close.TextSize = 14
close.TextWrapped = true
close.MouseButton1Down:connect(function()
Frame.Visible = false
end)
