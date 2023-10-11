import pandas as pd


df = pd.read_csv('Climate-related_Disasters_Frequency.csv')



data = {
    "Drought":[0]*43,
    "Extreme temperature":[0]*43,
    "Flood":[0]*43,
    "Landslide":[0]*43,
    "Storm":[0]*43,
    "Wildfire":[0]*43
}


# for ind in df.index:
#     disaster = df['Indicator'][ind].split(":")[1].strip()
#     row = df[ind].to_list()
#     print(row)


for index, row in df.iterrows():
    disaster = row["Indicator"].split(":")[1].strip()

    if disaster == "TOTAL":
        continue

    newRow = list(row)[10:]
    for i in range(len(newRow)):
        if not(pd.isna(newRow[i])):
            data[disaster][i] += float(newRow[i])

reformattedData = []

for key in data:
    stuff = data[key]
    for i in range(len(stuff)):
        reformattedData.append([1980+i,key,stuff[i]])

#print(reformattedData)
newDf = pd.DataFrame(reformattedData,columns=["Year","Disaster","Quantity"])
newDf.to_csv("new.csv",index=False)